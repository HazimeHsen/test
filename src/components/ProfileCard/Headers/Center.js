import handleProfilePhotoClick from "@/lib/handleProfilePhotoClick";
import Image from "next/image";

export default function HeaderCenter({ card }) {
  return (
    <header
      className={`relative w-full bg-cover max-h-[144px] min-h-[144px] mb-5`}>
      <Image
        fill
        src={
          card.coverPhoto.length > 0
            ? card.coverPhoto
            : "/assets/images/placeholders/cover.jpeg"
        }
        alt={card.details.name + " Photo"}
        priority="true"
        quality={100}
        className="relative top-0 left-0 w-full h-[95px]"
      />
      <div
        className={`left-1/2 border-[6px] border-white -bottom-[50px] z-[2] absolute -translate-x-1/2 rounded-full bg-white  `}>
        {card.logoPhoto && (
          <Image
            data-testid="company-logo"
            alt="logo"
            src={card.logoPhoto}
            width={32}
            height={32}
            quality={100}
            className="w-11 h-11 object-cover border-4 border-white rounded-full absolute bottom-0 -right-4 z-10 shadow-md"
          />
        )}

        <div className="relative w-[100px] h-[100px]">
          <Image
            onClick={() => {
              if (card.profilePhoto.length > 0)
                handleProfilePhotoClick(card.profilePhoto, card.userName);
            }}
            fill
            src={
              card.profilePhoto.length > 0
                ? card.profilePhoto
                : "/assets/images/placeholders/user.png"
            }
            alt={card.details.name + " Photo"}
            priority="true"
            className={`${
              card.profilePhoto.length > 0
                ? "w-[100px] h-[100px] rounded-full object-cover absolute top-0 left-0 z-[2] hover:brightness-75 transition-all"
                : ""
            }`}
          />
        </div>
      </div>
    </header>
  );
}
