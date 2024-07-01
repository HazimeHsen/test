import generateQR from "./generateQR";

export default async function generateQRWithLogo(
  urlToShare,
  imageUrl,
  color = "#1F2937"
) {
  const vanillaQr = await generateQR(urlToShare, color);

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  const logoImage = new Image();
  logoImage.crossOrigin = "anonymous";
  let imageDataUrl;

  imageDataUrl = imageUrl;
  logoImage.src = imageDataUrl;

  const qrImage = new Image();
  qrImage.src = vanillaQr;
  canvas.width = 1080;
  canvas.height = 1080;

  let qrLoaded = false,
    logoLoaded = false;

  const imageLoadingPromise = new Promise((resolve) => {
    qrImage.onload = function () {
      qrLoaded = true;
      checkLoadingComplete();
    };

    logoImage.onload = function () {
      logoLoaded = true;
      checkLoadingComplete();
    };

    function checkLoadingComplete() {
      if (logoLoaded && qrLoaded) {
        resolve();
      }
    }
  });

  await imageLoadingPromise; // Wait for the images to finish loading

  ctx.drawImage(qrImage, 0, 0, canvas.width, canvas.width);

  const logoWidth = canvas.width / 4;
  const logoX = (canvas.width - logoWidth) / 2;
  const logoY = logoX;
  const padding = 10;

  ctx.save();
  roundedImage(logoX, logoY, logoWidth, logoWidth, 25);
  ctx.clip();
  ctx.fillStyle = "white";
  ctx.fillRect(logoX, logoY, logoWidth, logoWidth);
  ctx.restore();

  ctx.save();
  roundedImage(
    logoX + padding,
    logoY + padding,
    logoWidth - padding * 2,
    logoWidth - padding * 2,
    25
  );
  ctx.clip();
  ctx.drawImage(
    logoImage,
    0,
    0,
    logoImage.width,
    logoImage.height,
    logoX + padding,
    logoY +
      padding +
      (logoWidth -
        padding * 2 -
        (logoWidth - padding * 2) / (logoImage.width / logoImage.height)) /
        2, // Adjusting Y position
    logoWidth - padding * 2,
    (logoWidth - padding * 2) / (logoImage.width / logoImage.height)
  );

  ctx.restore();
  const result = canvas.toDataURL();

  function roundedImage(x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
  }

  return result;
}
