import React from "react";
import ProfileLinkStyle from "../ProfileLinkStyle";

const LinksBody = ({ card, center, cardUserId }) => {
  const userName = card.uid ? card.uid : card.userName;

  return (
    <main
      className={`${
        !card.styles.links.colorIcons && "bg-white"
      } flex-grow w-full  ${
        card.styles.color.primary === "#000000" ? "text-white" : "text-black"
      }`}>
      {card.links.length > 0 &&
        (center ? (
          <div
            className={`flex justify-center flex-wrap ${
              !card.styles.links.colorIcons && "bg-white"
            }`}>
            {card.links.map(
              (link, idx) =>
                link.active && (
                  <div
                    className={`flex justify-center mb-[10px] ${
                      !link?.highlight ? "mx-[9px]" : "w-full"
                    }`}
                    key={link.id}>
                    <ProfileLinkStyle
                      cardUserId={cardUserId}
                      card={card}
                      userName={userName}
                      highlight={link?.highlight}
                      center={center}
                      link={link}
                      isPreview={true}
                    />
                  </div>
                )
            )}
          </div>
        ) : (
          <div
            className={`flex flex-col gap-4 px-5 pb-5 w-full ${
              !card.styles.links.colorIcons && "bg-white"
            }`}>
            {card.links.map(
              (link, idx) =>
                link.active && (
                  <div className={`flex relative items-center`} key={link.id}>
                    <ProfileLinkStyle
                      cardUserId={cardUserId}
                      card={card}
                      userName={userName}
                      highlight={link?.highlight}
                      center={center}
                      link={link}
                      isPreview={true}
                    />
                  </div>
                )
            )}
          </div>
        ))}
    </main>
  );
};

export default LinksBody;
