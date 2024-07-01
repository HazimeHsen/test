import React, { useEffect, useState } from "react";
import { getSocialLinks } from "@/lib/socialHelpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getInsightObject } from "@/lib/insights/getInsightObject";
import getCookie from "@/lib/cookies/getCookie";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase/clientApp";

export default function ProfileLinkStyle({
  card,
  link,
  highlight,
  center,
  cardUserId,
}) {
  const userName = card.uid ? card.uid : card.userName;
  const [url, setUrl] = useState("");
  const [iconColor, setIconColor] = useState("#ffffff");
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    const socialLinks = getSocialLinks();
    const { type, name } = link;
    const itemData = socialLinks[type];

    if (itemData) {
      setUrl(itemData.urlGenerator(name));
      setIcon(itemData.icon);
      setIconColor(itemData.color);
    }
  }, [link]);

  function hexToRgb(hexColor) {
    hexColor = hexColor.replace("#", "");
    const red = parseInt(hexColor.substr(0, 2), 16);
    const green = parseInt(hexColor.substr(2, 2), 16);
    const blue = parseInt(hexColor.substr(4, 2), 16);
    return `${red}, ${green}, ${blue}`;
  }

  const primaryColor = hexToRgb(card.styles.color.primary);

  async function handleLinkClick() {
    const insightId = getCookie("insightId");
    const insightObject = await getInsightObject(
      insightId,
      userName,
      cardUserId
    );
    const clickEvents = insightObject.clickEvents;

    if (!clickEvents.includes(link.id)) {
      clickEvents.push(link.id);
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

  return (
    <>
      {center ? (
        highlight ? (
          <a
            onClick={handleLinkClick}
            target="_blank"
            href={url}
            rel="noopener noreferrer"
            className={`transition-colors w-full py-[15px] pl-6 flex flex-row items-center relative`}
            style={{
              backgroundColor:
                card.styles?.cardLayout === "left" ||
                card.styles?.cardLayout === "portrait"
                  ? null
                  : card.styles.links.colorIcons
                  ? `rgb(${primaryColor}, 0.1)`
                  : "rgb(247, 247, 247)",
            }}>
            <div
              className="w-[70px] h-[70px] shadow-sm rounded-xl flex justify-center items-center"
              style={{
                backgroundColor: card?.styles?.links?.colorIcons
                  ? card?.styles?.color?.primary === "#ffffff"
                    ? "#000000"
                    : card?.styles?.color?.primary
                  : iconColor,
              }}>
              {icon && (
                <FontAwesomeIcon icon={icon} size="2x" color="#ffffff" />
              )}
            </div>
            <div
              className={`flex flex-col justify-center pl-[10px] ${
                card?.styles?.links?.colorIcons &&
                card?.styles?.color?.primary === "#000000"
                  ? "text-white"
                  : "text-black"
              }`}>
              <p className="font-semibold text-sm">
                {link.title.length > 0 ? link.title : link.type}
              </p>
              <p className="text-xs">
                {link?.description?.length > 0 ? link.description : null}
              </p>
            </div>
          </a>
        ) : (
          <a
            onClick={handleLinkClick}
            target="_blank"
            href={url}
            className="flex flex-col w-[70px] h-[80px] justify-between items-center relative"
            rel="noopener noreferrer">
            <div
              className="shadow-sm w-[70px] h-[70px] mb-1 rounded-xl flex justify-center items-center"
              style={{
                backgroundColor: card?.styles?.links?.colorIcons
                  ? card?.styles?.color?.primary === "#ffffff"
                    ? "#000000"
                    : card?.styles?.color?.primary
                  : iconColor,
              }}>
              {icon && (
                <FontAwesomeIcon icon={icon} size="2x" color="#ffffff" />
              )}
            </div>
            <span
              className={`${
                card?.styles?.links?.colorIcons &&
                card?.styles?.color?.primary === "#000000"
                  ? "text-white"
                  : "text-black"
              } truncate w-[90%] text-[10px] text-center whitespace-nowrap `}>
              {link.title.length > 0 ? link.title : link.type}
            </span>
          </a>
        )
      ) : (
        <a
          onClick={handleLinkClick}
          target="_blank"
          href={url}
          rel="noopener noreferrer"
          className={`w-full flex flex-row`}
          style={{
            backgroundColor:
              card.styles?.cardLayout === "left" ||
              card.styles?.cardLayout === "portrait"
                ? null
                : card.styles.links.colorIcons
                ? `rgb(${primaryColor}, 0.1)`
                : "rgb(247, 247, 247)",
          }}>
          <div
            className="w-[50px] h-[50px] shadow-sm rounded-xl flex justify-center items-center"
            style={{
              backgroundColor: card?.styles?.links?.colorIcons
                ? card?.styles?.color?.primary === "#ffffff"
                  ? "#000000"
                  : card?.styles?.color?.primary
                : iconColor,
            }}>
            {icon && <FontAwesomeIcon icon={icon} size="2x" color="#ffffff" />}
          </div>
          <div
            className={`flex flex-col justify-center pl-[10px] ${
              card?.styles?.links?.colorIcons &&
              card?.styles?.color?.primary === "#000000"
                ? "text-white"
                : "text-black"
            }`}>
            <p className="font-semibold text-sm">
              {link.title.length > 0 ? link.title : link.type}
            </p>
            <p className="text-xs">
              {link?.description?.length > 0 ? link.description : null}
            </p>
          </div>
        </a>
      )}
    </>
  );
}
