export default async function dataUrlToImage(dataUrl, fileName = 'profilePhoto') {

    const response = await fetch(dataUrl);
    const blob = await response.blob();
    const file = new File([blob], fileName, { type: blob.type });

    return file
} 