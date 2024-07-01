import Image from "next/image";
import React from "react";

const BodyPortrait = ({ card }) => {
  function isOnlyHtmlTags(html) {
    const trimmedHtml = html.replace(/<[^>]+>/g, "").trim();
    return trimmedHtml.length === 0;
  }

  return (
    <>
      <div className="pt-[30px] pl-[41px] pr-[30px] w-full flex flex-col text-start items-start">
        <div className="w-full flex justify-between">
          <div className="block w-3/4 whitespace-pre-line">
            {card.details.name.length > 0 && (
              <p className="inline-block mr-1 font-semibold truncate contacting-none tracking-tighter min-w-3 max-w-36 pb-1">
                {card.details.prefix} {card.details.name}
              </p>
            )}
            {card.details.jobTitle.length > 0 && (
              <div className="opacity-70 font-inter text-xs max-w-[70%] min-w-[10px] font-semibold tracking-tighter pb-0.5">
                {card.details.jobTitle}
              </div>
            )}
            {card.details.company.length > 0 && (
              <div className="opacity-70 font-inter text-xs max-w-[70%] min-w-[10px] font-semibold tracking-tighter pb-0.5">
                {card.details.company}
              </div>
            )}

            {card.details.location.length > 0 && (
              <div className="min-h-[13px] opacity-70 font-inter text-xs max-w-[70%] min-w-[10px] font-medium py-0.5 tracking-tighter">
                <span className="font-normal">{card.details.location}</span>
              </div>
            )}
          </div>
          {card.logoPhoto.length > 0 && (
            <Image
              width={96}
              height={96}
              alt="logo"
              src={card.logoPhoto}
              style={{
                objectFit: "cover",
                borderRadius: "50%",
                zIndex: 5,
                boxShadow: "rgba(0, 0, 0, 0.15) 0px 4px 12px",
              }}
            />
          )}
        </div>
        {card.details.bio.length > 0 && (
          <div className="opacity-70 overflow-hidden mb-6 text-xs max-w-full min-w-[10px] font-medium contacting-tight tracking-tighter">
            <div className="w-full break-words font-inter min-h-[27px] pt-[10px]">
              {card.details.bio}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BodyPortrait;
