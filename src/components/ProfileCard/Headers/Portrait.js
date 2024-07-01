import Image from "next/image";

export default function HeaderPotrait({ card }) {
  function hexToRgb(hexColor) {
    hexColor = hexColor.replace("#", "");
    const red = parseInt(hexColor.substr(0, 2), 16);
    const green = parseInt(hexColor.substr(2, 2), 16);
    const blue = parseInt(hexColor.substr(4, 2), 16);
    return `${red}, ${green}, ${blue}`;
  }

  const rgbColor = hexToRgb(card.styles.color.primary);
  return (
    <header className={`relative w-full h-full`}>
      <Image
        width={600}
        height={600}
        src={
          card.profilePhoto.length > 0
            ? card.profilePhoto
            : "/assets/images/placeholders/user.png"
        }
        alt={card.details.name + " Photo"}
        priority="true"
        className={`w-full h-full object-cover`}
      />
      <div
        className="w-full -bottom-1 absolute h-32 z-10"
        style={{
          background: `linear-gradient(transparent, rgb(${rgbColor},0.4))`,
        }}></div>
      <div
        className="w-full -bottom-1 absolute h-32 z-0"
        style={{
          background: `linear-gradient(transparent, #fff)`,
        }}></div>
    </header>
  );
}
