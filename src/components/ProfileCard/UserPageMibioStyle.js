import React, { useEffect, useState } from "react";
import LeadCaptureModal from "@/components/Lead/LeadCaptureModal";
import BodyCenter from "./BodyData/Center";
import HeaderCenter from "./Headers/Center";
import HeaderLeft from "./Headers/Left";
import HeaderPotrait from "./Headers/Portrait";
import BodyLeft from "./BodyData/Left";
import BodyPortrait from "./BodyData/Portrait";
import SaveButton from "./SaveButton";
import LinksBody from "./Links/LinksBody";
import "./fonts.css";

export default function UserPageMibioStyle({ card, cardUserId }) {
  const [leadCaptureModal, setLeadCaptureModal] = useState(false);

  const headerStyle = {
    center: <HeaderCenter card={card} />,
    left: <HeaderLeft card={card} />,
    portrait: <HeaderPotrait card={card} />,
  };
  const bodyStyle = {
    center: <BodyCenter card={card} />,
    left: <BodyLeft card={card} />,
    portrait: <BodyPortrait card={card} />,
  };

  useEffect(() => {
    if (card.leadCaptureMode) {
      setLeadCaptureModal(true);
    } else {
      setLeadCaptureModal(false);
    }
  }, [card?.leadCaptureMode]);

  function hexToRgb(hexColor) {
    hexColor = hexColor.replace("#", "");
    const red = parseInt(hexColor.substr(0, 2), 16);
    const green = parseInt(hexColor.substr(2, 2), 16);
    const blue = parseInt(hexColor.substr(4, 2), 16);
    return `${red}, ${green}, ${blue}`;
  }

  const rgbColor = hexToRgb(card.styles.color.primary);
  const fontFamily = card.styles?.font || "Arial";

  return (
    <>
      <div
        style={{
          boxShadow: "0px 24px 60px rgba(0, 0, 0, 0.1)",
          fontFamily: fontFamily,
        }}
        className={`max-w-[512px] ${
          leadCaptureModal ? "h-screen overflow-hidden" : "min-h-screen"
        } w-full h-full flex relative items-center flex-col`}>
        <div
          style={{
            backgroundColor: `rgba(${rgbColor},0.4)`,
          }}
          className="w-full flex flex-grow items-center flex-col">
          {card.styles?.cardLayout?.length > 0 ? (
            <>
              {headerStyle[card.styles.cardLayout]}
              {bodyStyle[card.styles.cardLayout]}
            </>
          ) : (
            headerStyle[0]
          )}
          <SaveButton
            card={card}
            center={card.styles.cardLayout === "center"}
            cardUserId={cardUserId}
          />
          <LinksBody
            card={card}
            center={card.styles.cardLayout === "center"}
            cardUserId={cardUserId}
          />
          <script
            async
            defer
            crossOrigin="anonymous"
            src="https://connect.facebook.net/en_US/sdk.js"></script>
        </div>
      </div>
      <LeadCaptureModal
        card={card}
        openModal={leadCaptureModal}
        setOpenModal={setLeadCaptureModal}
      />
    </>
  );
}
