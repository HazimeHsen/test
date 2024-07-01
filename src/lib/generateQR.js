import QRCode from 'qrcode'

export default async function generateQR(text, color = '#1F2937') {
    try {
        const image = await QRCode.toDataURL(text, {
            margin: 2,
            scale: 10,
            width: 1080,
            color: {
                dark: color,
                light: '#FFFFFF',
            },
        });
        return image;
    } catch (err) {
        console.error(err);
    }
}
