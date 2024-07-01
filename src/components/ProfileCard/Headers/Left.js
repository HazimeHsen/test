import handleProfilePhotoClick from "@/lib/handleProfilePhotoClick";
import Image from "next/image";

export default function HeaderLeft({ card }) {
  return (
    <header
      className={`relative w-full max-h-[144px] min-h-[144px] mb-5 bg-cover`}>
      <Image
        fill
        src={
          card.coverPhoto.length > 0
            ? card.coverPhoto
            : "/assets/images/placeholders/cover.jpeg"
        }
        alt={card.details.name + " Photo"}
        priority="true"
        className="relative top-0 left-0 w-full h-[95px]"
      />
      <div
        className={`left-4 border-[6px] border-white -bottom-[50px] z-[2] absolute rounded-full bg-white  `}>
        {card.logoPhoto && (
          <Image
            data-testid="company-logo"
            alt="logo"
            width={36}
            height={36}
            src={card.logoPhoto}
            className="w-11 h-11 object-cover rounded-full border-[4px] border-white  absolute -bottom-1 -right-5 z-10"
            style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 4px 12px" }}
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
