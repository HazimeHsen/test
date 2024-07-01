import { toPng } from "html-to-image";

export const htmlToImageConvert = (ref) => {
  const scaleFactor = 2;
  const options = {
    cacheBust: false,
    quality: 1,
    pixelRatio: scaleFactor,
  };

  return toPng(ref.current, options);
};
