    import axios from 'axios';

    export default async function generateVCard(card) {
    const details = card.details;
    const isIphone = navigator.userAgent.match(/iPhone/i);

    const isEnglish = card.styles.language === "en";

    const capitalizeFirstLetter = (string) =>
        string.charAt(0).toUpperCase() + string.slice(1);

    function getLinksArrayByType(type) {
        if (card?.links.length === 0) return [];
        const result = {};

        card.links.forEach((item) => {
        let { type, label, name } = item;
        let finalType = label || "other";

        if (type === "website" || type === "link") type = "url";

        if (!result[type]) result[type] = [];
        result[type].push({ type: finalType, text: name });
        });

        return result[type];
    }

    function getSocialProfile() {
        if (card?.links.length === 0) return [];

        return card.links.map((item) => {
        const { type, name } = item;
        const lowerType = type.toLowerCase();

        return { type: lowerType, user: name };
        });
    }

    let content = "BEGIN:VCARD\n";
    content += isIphone ? "VERSION:3.0\n" : "VERSION:2.1\n";

    if (details.name) {
        content += `N:${details.name};;;\n`;
        content += `FN:${details.name}\n`;
    }

    const phones = getLinksArrayByType("phone");
    const emails = getLinksArrayByType("email");
    const addresses = getLinksArrayByType("address");
    const urls = getLinksArrayByType("url");

    if (phones) {
        phones.forEach(({ type, text }, i) => {
        if (type === "other") type = isIphone ? "mobile" : "cell";
        if (text) {
            if (isIphone) {
            content += `TEL;type=${type};type=VOICE${
                i === 0 ? ";type=pref" : ""
            }:${text}\n`;
            } else {
            type = capitalizeFirstLetter(type);
            content += `TEL;${type}:${text}\n`;
            }
        }
        });
    }

    if (emails) {
        emails.forEach(({ type, text }, i) => {
        if (type === "other") type = "work";
        if (text) {
            if (isIphone) {
            content += `EMAIL;type=INTERNET;type=${type}${
                i === 0 ? ";type=pref" : ""
            }:${text}\n`;
            } else {
            type = capitalizeFirstLetter(type);
            content += `EMAIL${i === 0 ? ";PREF" : ""};${type}:${text}\n`;
            }
        }
        });
    }

    if (addresses) {
        addresses.forEach(({ type, text }, i) => {
        if (type === "other") type = "home";
        if (text) {
            if (isIphone) {
            content += `item${i + 1}.ADR;type=${type}${
                i === 0 ? ";type=pref" : ""
            }:${text}\n`;
            } else {
            type = capitalizeFirstLetter(type);
            content += `ADR${i === 0 ? ";PREF" : ""};${type}:${text}\n`;
            }
        }
        });
    }

    if (urls) {
        urls.forEach(({ type, text }, i) => {
        if (type === "other") type = "work";
        if (text) {
            if (isIphone) {
            content += `URL;type=${type}${i === 0 ? ";type=pref" : ""}:${text}\n`;
            } else {
            content += `URL:${text}\n`;
            }
        }
        });

        if (isIphone) {
        content += `URL;type=Digital Profile:https://mibio.bio/${card.userName}\n`;
        } else {
        content += `URL:https://mibio.bio/${card.userName}\n`;
        }
    } else {
        if (isIphone) {
        content += `URL;type=Digital Profile;type=pref:https://mibio.bio/${card.userName}\n`;
        } else {
        content += `URL:https://mibio.bio/${card.userName}\n`;
        }
    }

    if (details.company && details.title) {
        content += `ORG:${details.company};${details.title}\n`;
    } else if (details.company) {
        content += `ORG:${details.company}\n`;
    } else if (details.title) {
        content += `ORG:${details.title}\n`;
    }

    if (details.headline) content += `TITLE:${details.headline}\n`;

    // if (isIphone) content += `NOTE:Check out my profile at https://mibio.bio/${card.userName}!\n`;
    // if (isIphone)
    //     content += isEnglish
    //         ? `NOTE:My digital profile page https://mibio.bio/${card.userName}\n`
    //         : `NOTE:Իմ թվային պրոֆիլի էջը https://mibio.bio/${card.userName}\n`;

    if (!isIphone) content += "\n";

    const socials = getSocialProfile();
    if (isIphone) {
        socials.forEach(({ type, user }) => {
        let includeXUser = true;
        type = capitalizeFirstLetter(type);

        if (type === "Tiktok") {
            type = "TikTok";
        } else if (type === "Linkedin") {
            includeXUser = false;
            type = "LinkedIn";
        } else if (type === "Facebook") {
            includeXUser = false;
        } else if (type === "Twitter") {
            includeXUser = false;
        } else if (type === "Whatsapp") {
            type = "WhatsApp";
        } else if (type === "Youtube") {
            type = "YouTube";
        } else if (type === "Vk") {
            type = "VK";
        } else if (type === "Odnoklassniki") {
            type = "OK";
        } else if (type === "Line") {
            type = "LINE";
        } else if (type === "Soundcloud") {
            type = "SoundCloud";
        }

        if (
            type === "Tripadvisorreviews" ||
            type === "Googlereviews" ||
            type === "Yandexreviews" ||
            type === "Facebookreviews" ||
            type === "Glovo"
        ) {
            return;
        }

        if (user)
            content += `X-SOCIALPROFILE;type=${type}${
            includeXUser ? `;x-user=${user}:x-apple` : ""
            }:${user}\n`;
        });
    }

    if (card.profilePhoto?.url) {
        const { data } = await axios.get(
        `/api/getImageBase64?url=${encodeURIComponent(card.profilePhoto.url)}`
        );

        const mime_type = card.profilePhoto.type === "image/png" ? "PNG" : "JPEG";

        if (isIphone) {
        content += `PHOTO;ENCODING=b;TYPE=${mime_type}:${data}\n\n`;
        } else {
        content += `PHOTO;ENCODING=BASE64;${mime_type}:${data}\n\n`;
        }
    }

    // if (!isIphone) content += `NOTE:Check out my profile at https://mibio.bio/${card.userName}!\n`;
    // if (!isIphone)
    //     content += isEnglish
    //         ? `NOTE:My digital profile page https://mibio.bio/${card.userName}\n`
    //         : `NOTE:Իմ թվային պրոֆիլի էջը https://mibio.bio/${card.userName}\n`;

    if (!isIphone) {
        socials.forEach(({ type, user }) => {
        let includeEncoding = true;
        let includeUSERNAME = false;

        type = capitalizeFirstLetter(type);

        if (type === "Tiktok") {
            type = "TikTok";
        } else if (type === "Linkedin") {
            type = "LinkedIn";
        } else if (type === "Facebook") {
            type = type.toUpperCase();
            includeEncoding = false;
        } else if (type === "Whatsapp") {
            includeEncoding = false;
            type = type.toUpperCase();
        } else if (type === "Skype") {
            includeEncoding = false;
            includeUSERNAME = true;
            type = type.toUpperCase();
        } else if (type === "Vk") {
            type = "VK";
        } else if (type === "Odnoklassniki") {
            type = "OK";
        } else if (type === "Line") {
            type = "LINE";
        } else if (type === "Soundcloud") {
            type = "SoundCloud";
        }

        if (
            type === "Tripadvisorreviews" ||
            type === "Googlereviews" ||
            type === "Yandexreviews" ||
            type === "Facebookreviews" ||
            type === "Glovo"
        ) {
            return;
        }

        if (user) {
            if (includeEncoding) {
            content += `X-CUSTOM(CHARSET=UTF-8,ENCODING=QUOTED-PRINTABLE,${type}):${user}\n`;
            } else {
            if (includeUSERNAME) {
                content += `X-${type.toUpperCase()}-USERNAME:${user}\n`;
            } else {
                content += `X-${type.toUpperCase()}:${user}\n`;
            }
            }
        }
        });
    }

    content += "END:VCARD";

    return content;
    }