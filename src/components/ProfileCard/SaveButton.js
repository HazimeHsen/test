"use client";
import { db } from "@/firebase/clientApp";
import getCookie from "@/lib/cookies/getCookie";
import generateVCard from "@/lib/generateVCard";
import { getInsightObject } from "@/lib/insights/getInsightObject";
import LoadingSpinner from "@/components/Common/LoadingSpinner";
import { doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import { useTranslation } from "react-i18next";

const SaveButton = ({ card, center, cardUserId }) => {
  const userName = card.uid ? card.uid : card.userName;
  const [saveContactLoading, setSaveContactLoading] = useState(false);
  const { t } = useTranslation();

  function hexToRgb(hexColor) {
    hexColor = hexColor.replace("#", "");
    const red = parseInt(hexColor.substr(0, 2), 16);
    const green = parseInt(hexColor.substr(2, 2), 16);
    const blue = parseInt(hexColor.substr(4, 2), 16);
    return `${red}, ${green}, ${blue}`;
  }
  const primaryColor = hexToRgb(card.styles.color.primary);

  async function downloadVCard() {
    setSaveContactLoading(true);
    const vCard = await generateVCard(card);
    const a = document.createElement("a");
    const file = new Blob([vCard], { type: "text/vcard" });
    a.href = URL.createObjectURL(file);
    a.download = "contact.vcf";
    a.click();
    URL.revokeObjectURL(a.href);
    setSaveContactLoading(false);
    const insightId = getCookie("insightId");
    if (insightId) {
      const insightObject = await getInsightObject(
        insightId,
        userName,
        cardUserId
      );
      const clickEvents = insightObject.clickEvents;
      if (!clickEvents.includes("save")) {
        clickEvents.push("save");
        insightObject.clickEvents = clickEvents;
        sessionStorage.setItem(insightId, JSON.stringify(insightObject));
        // TODO
        const ref = doc(
          db,
          `users/${cardUserId}/cards/${userName}/insights`,
          insightId
        );
        setDoc(ref, insightObject, {
          merge: true,
        });
      }
    }
  }

  return (
    <div
      className={`w-full pb-6 px-5 flex items-center justify-center `}
      style={{
        background:
          !card.styles.links.colorIcons &&
          "linear-gradient(rgba(255, 255, 255, 0) 15%, rgb(255, 255, 255) 100%) rgba(255, 255, 255, 0)",
      }}>
      <div className="flex justify-center items-center max-w-[350px] w-full">
        <button
          onClick={downloadVCard}
          disabled={saveContactLoading}
          className={`${
            card.styles.color.primary === "#000000"
              ? "text-black"
              : "text-white"
          } flex btn items-center w-full border-none outline-none text-sm justify-center disabled:opacity-60 ${
            center ? "w-[170px] h-[37px]" : "w-full h-10"
          } font-semibold rounded-full`}
          style={{
            fontFamily: "Inter",
            backgroundColor:
              card.styles.color.primary === "#000000"
                ? "#ffffff"
                : card.styles.color.primary === "#ffffff"
                ? "#000000"
                : `rgb(${primaryColor})`,
          }}>
          {saveContactLoading ? (
            <LoadingSpinner
              color={
                card.styles.color.primary === "#000000" ? "#000000" : "#ffffff"
              }
            />
          ) : (
            t("save.button")
          )}
        </button>
      </div>
    </div>
  );
};

export default SaveButton;
