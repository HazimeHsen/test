import axios from "axios";
import sharp from "sharp";

export async function GET(req, res) {
  try {
    const { url } = req.query;
    if (!url) {
      return Response.json({ error: "URL parameter is required", status: 400 });
    }

    const response = await axios.get(url, { responseType: "arraybuffer" });

    const quality = 80;
    const compressedImageBuffer = await compressImage(
      response.data,
      120 * 1024,
      quality
    );
    const compressedImageBase64 = compressedImageBuffer.toString("base64");

    return Response.json({ base64String: compressedImageBase64, status: 200 });
  } catch (error) {
    const errorMessage = error.response?.data || "Error fetching the image";
    return Response.json({ error: errorMessage, status: 500 });
  }
}

async function compressImage(imageBuffer, maxSizeInBytes, quality) {
  let compressedImageBuffer = await sharp(imageBuffer)
    .jpeg({ quality })
    .toBuffer();

  while (compressedImageBuffer.length > maxSizeInBytes && quality > 10) {
    quality -= 10;
    compressedImageBuffer = await sharp(imageBuffer)
      .jpeg({ quality })
      .toBuffer();
  }

  return compressedImageBuffer;
}
