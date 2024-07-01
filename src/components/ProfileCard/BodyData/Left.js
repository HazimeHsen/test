import React from "react";

const BodyLeft = ({ card }) => {
  function isOnlyHtmlTags(html) {
    const trimmedHtml = html.replace(/<[^>]+>/g, "").trim();
    return trimmedHtml.length === 0;
  }

  return (
    <>
      <div className="w-3/4 flex min-w-[120px] pt-[43px] flex-col text-start items-start">
        {card.details.name.length > 0 && (
          <div className="min-h-[23px] overflow-hidden text-center font-semibold text-lg max-w-full min-w-[10px] max-h-[56px] truncate contacting-none tracking-tighter pb-1">
            <span className="font-bold">
              {card.details.prefix} {card.details.name}
            </span>
          </div>
        )}
        <div className="opacity-70 font-inter text-center text-xs max-w-[70%] min-w-[10px] font-semibold tracking-tighter pb-0.5">
          {card.details.jobTitle.length > 0 && card.details.company.length > 0
            ? card?.styles?.language === "en"
              ? card.details.jobTitle + " at " + card.details.company
              : card.details.jobTitle + " " + card.details.company + "-ում"
            : card.details.jobTitle.length > 0
            ? card.details.jobTitle
            : card.details.company}
        </div>
        {card.details.location.length > 0 && (
          <div className="min-h-[13px] opacity-70 font-inter text-center text-xs max-w-[90%] min-w-[10px] font-medium py-0.5 tracking-tighter">
            <span className="font-normal">{card.details.location}</span>
          </div>
        )}
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

export default BodyLeft;
