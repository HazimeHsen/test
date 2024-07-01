import React, { useState, useEffect } from "react";
import styles from "./LeadCaptureModal.module.css";
import axios from "axios";
import LoadingSpinner from "@/components/Common/LoadingSpinner";
import { useTranslation } from "react-i18next";
import getArmenianLocale from "@/constants/hy.countries";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Timestamp, doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase/clientApp";
import useAuth from "@/hooks/useAuth";
import generateUniqueId from "@/lib/generateUniqueId";
import "../ProfileCard/fonts.css";

const LeadCaptureModal = ({ card, openModal, setOpenModal }) => {
  const { user } = useAuth();
  const [inputValues, setInputValues] = useState(
    Array.from({ length: card.connectInputs?.length }, (_, index) => {
      const input = card.connectInputs[index];
      return input.type === "checkbox" ? input.checked ?? false : "";
    })
  );
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(
    Array.from({ length: card.connectInputs?.length }, () => false)
  );
  const { t, i18n } = useTranslation();
  const armenianCountries = getArmenianLocale();
  const fontFamily = card.styles?.font || "Arial";

  const content = card?.connectInputs.map((input, index) => {
    return {
      ...input,
      value: inputValues[index] ?? "",
    };
  });
  const profileUrl = `http://mibio.me/${card.uid}`;
  const mibioUserName = card?.followUpEmail?.to;
  const contactUserName = content.find((item) => item.type === "email")?.value;
  const message = card?.followUpEmail?.message;
  const subject = card?.followUpEmail?.subject;

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleInputChange = (index, value) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value ?? "";
    setInputValues(newInputValues);
  };

  function extractATags(text) {
    const regex = /<a[^>]*>(.*?)<\/a>/g;
    const matches = text.match(regex);
    return matches || [];
  }
  function replaceATags(text) {
    const variableMapping = {
      "{{Mibio User's Name}}": mibioUserName,
      "{{Lead's Name}}": contactUserName,
      "{{My Mibio Profile URL}}": `<a href="${profileUrl}">${profileUrl}</a>`,
    };

    const aTags = extractATags(text);

    for (const aTag of aTags) {
      const match = aTag.match(/data-value="([^"]+)"/);
      if (match) {
        const dataValue = match[1];
        if (dataValue in variableMapping) {
          const variable = variableMapping[dataValue];
          // Decode HTML entities
          const decodedVariable = new DOMParser().parseFromString(
            variable,
            "text/html"
          ).body.textContent;
          text = text.replace(aTag, decodedVariable);
        }
      }
    }

    return text;
  }

  function replaceHtmlEntities(text) {
    const htmlEntities = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'",
      "&#x2F;": "/",
      "&#x60;": "`",
      "&#x3D;": "=",
      "&nbsp;": " ",
    };

    return text.replace(
      /&[\w\d#]{2,5};/g,
      (entity) => htmlEntities[entity] || entity
    );
  }

  const validateEmail = (email) => {
    const re =
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    return re.test(email);
  };

  const renderOptions = (options, title, index) => {
    return (
      <select
        value={inputValues[index]}
        onChange={(event) => handleInputChange(index, event.target.value)}
        className="select select-bordered w-full">
        <option value={""}>{title}</option>
        {options.map((option, idx) => (
          <option key={idx} value={option.value}>
            {option.value}
          </option>
        ))}
      </select>
    );
  };

  const handleSubmit = async () => {
    const newErrors = inputValues.map((value, index) => {
      if (card?.connectInputs[index].required && !value.trim()) {
        return "This input is required";
      }
      return "";
    });
    setErrors(newErrors);

    if (newErrors.some((error) => error)) {
      return;
    }

    try {
      setIsLoading(true);

      let updatedSubject = replaceATags(subject);
      updatedSubject = replaceHtmlEntities(updatedSubject);
      const updatedMessage = replaceATags(message);

      const emailInputIndex = card?.connectInputs.findIndex(
        (input) => input.type === "email"
      );

      if (
        emailInputIndex !== -1 &&
        !validateEmail(inputValues[emailInputIndex])
      ) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [emailInputIndex]: "Invalid email",
        }));
        return;
      }

      if (card?.teamCard) {
        const uid = generateUniqueId();
        const contactRef = doc(db, `users/${card?.adminId}/contacts`, uid);
        const currentDate = Timestamp.now();
        await setDoc(contactRef, {
          inputsValues: content,
          uid: uid,
          createdAt: currentDate,
          by: card?.userId,
        });
      }

      const uid = generateUniqueId();
      const contactRef = doc(db, `users/${card?.userId}/contacts`, uid);
      const currentDate = Timestamp.now();
      await setDoc(contactRef, {
        inputsValues: content,
        uid: uid,
        type: "Lead capture form",
        createdAt: currentDate,
        by: card?.userId,
        card: card.userName,
      });

      console.log(updatedSubject);
      axios.post("/api/connect", {
        data: {
          name: card?.teamCard
            ? card?.userName
              ? card?.userName &&
                card.userName.split("-").slice(0, -1).join("-")
              : ""
            : card?.userName,
          user: card?.followUpEmail?.isOn ? card?.connectEmail : null,
          admin: card?.teamCard ? card?.followUpEmail?.admin : null,
          ccRecipients: card?.followUpEmail.ccRecipients,
          bccRecipients: card?.followUpEmail.bccRecipients,
          contact: contactUserName,
          subject: updatedSubject,
          message: updatedMessage,
          attachment: card?.followUpEmail?.attachment,
        },
      });

      setOpenModal(false);
    } catch (error) {
      console.error("Error sending data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{ fontFamily: fontFamily }}
      className={`${styles.modalOverlay} ${openModal ? styles.show : ""}`}
      onClick={handleCloseModal}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button
          onClick={handleCloseModal}
          className="text-lg absolute top-1 right-3 font-semibold hover:text-red-600 transition-colors duration-200 cursor-pointer">
          x
        </button>

        <h2 className="text-center font-semibold mb-2">
          {card?.connectTitle?.length > 0
            ? card?.connectTitle
            : "Share your info with Me"}
        </h2>
        <hr className="mb-4" />
        <form className="w-full">
          {card?.connectInputs.map(
            (input, index) =>
              input.title && (
                <div key={index} className="relative mb-2">
                  {input.type === "phone" ? (
                    <PhoneInput
                      placeholder={input.title}
                      value={inputValues[index]}
                      id={card?.connectInputs[index].id}
                      focusInputOnCountrySelection
                      onChange={(value) => handleInputChange(index, value)}
                      international={false}
                      defaultCountry="AM"
                      name="name"
                      className={`input input-bordered `}
                      labels={
                        i18n.language === "hy" ? armenianCountries : undefined
                      }
                    />
                  ) : input.type === "checkbox" ? (
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id={input.title}
                        defaultChecked={input.checked}
                        onChange={(e) =>
                          handleInputChange(index, e.target.checked)
                        }
                        className="checkbox"
                      />
                      <label
                        htmlFor={input.title}
                        className="ml-2 block text-sm text-gray-900">
                        {input.title}
                      </label>
                    </div>
                  ) : input.type === "dropdown" ? (
                    renderOptions(
                      input.options,
                      card?.connectInputs[index].title,
                      index
                    )
                  ) : (
                    <input
                      className="input input-bordered w-full"
                      placeholder={input.title}
                      value={inputValues[index]}
                      onChange={(event) =>
                        handleInputChange(index, event.target.value)
                      }
                    />
                  )}

                  {errors[index] && (
                    <p className="mt-0.5 text-red-500 text-xs ">
                      {errors[index]}
                    </p>
                  )}
                </div>
              )
          )}
          <button
            type="button"
            disabled={isLoading}
            onClick={handleSubmit}
            className={`btn w-full text-white disabled:text-white`}
            style={{
              backgroundColor:
                card?.styles?.color?.primary === "#ffffff"
                  ? "#000000"
                  : card.styles.color.primary,
            }}>
            {isLoading ? <LoadingSpinner color="#fff" size={5} /> : "Connect"}
          </button>
        </form>
        <h2 className={`text-center font-semibold mt-2 text-sm text-gray-500`}>
          {card?.connectFooter?.length > 0
            ? card?.connectFooter
            : "Mibio does not sell or share your data"}
        </h2>
      </div>
    </div>
  );
};

export default LeadCaptureModal;
