export default function generateUniqueId(length = 10) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const timestamp = new Date().getTime();
    let uniqueID = '';

    const letterCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const randomLetterIndex = Math.floor(Math.random() * letterCharacters.length);

    const randomLetter = letterCharacters[randomLetterIndex];

    uniqueID += randomLetter;

    while (uniqueID.length < length) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        const randomChar = characters[randomIndex];
        uniqueID += randomChar;
    }

    return `${uniqueID}${timestamp}`;
}
