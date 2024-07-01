export const urlGenerators = {
  getPlatform: () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
      return "android";
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return "ios";
    } else {
      return "web";
    }
  },

  instagram: (name) => {
    const platform = urlGenerators.getPlatform();

    if (platform === "android") {
      return `instagram://user?username=${name}`;
    } else if (platform === "ios") {
      return `instagram://user?username=${name}`;
    } else {
      return `https://www.instagram.com/${name}/`;
    }
  },

  tiktok: (name) => {
    const platform = urlGenerators.getPlatform();

    if (platform === "android") {
      return `https://www.tiktok.com/@${name}/`;
    } else if (platform === "ios") {
      return `https://www.tiktok.com/@${name}/`;
    } else {
      return `https://www.tiktok.com/@${name}/`;
    }
  },

  facebook: (name) => {
    const platform = urlGenerators.getPlatform();

    function isFacebookUsername(inputString) {
      const usernamePattern = /^[a-zA-Z0-9.]+$/;
      const idPattern = /^\d+$/;

      return usernamePattern.test(inputString) && !idPattern.test(inputString);
    }

    // let userId = '';
    // window.fbAsyncInit = function () {
    //     FB.init({
    //         appId: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID,
    //         autoLogAppEvents: true,
    //         xfbml: true,
    //         version: 'v17.0',
    //     });
    //     FB.api('/' + name, 'GET', {fields: 'id'}, function (response) {
    //         userId = response.id;
    //     });
    // };

    if (platform === "android") {
      return "fb://facewebmodal/f?href=https://facebook.com/" + name;
    } else {
      return isFacebookUsername(name)
        ? "https://facebook.com/" + name
        : "https://facebook.com/profile.php?id=" + name;
    }
  },

  messenger: (name) => {
    const platform = urlGenerators.getPlatform();

    if (platform === "android") {
      return `https://www.messenger.com/t/${name}/`;
    } else if (platform === "ios") {
      return `https://www.messenger.com/t/${name}/`;
    } else {
      return `https://www.messenger.com/t/${name}/`;
    }
  },

  linkedin: (name) => {
    const platform = urlGenerators.getPlatform();

    if (platform === "android") {
      return `https://www.linkedin.com/in/${name}/`;
    } else if (platform === "ios") {
      return `https://www.linkedin.com/in/${name}/`;
    } else {
      return `https://www.linkedin.com/in/${name}/`;
    }
  },

  linkedinCo: (name) => {
    const platform = urlGenerators.getPlatform();

    if (platform === "android") {
      return `https://www.linkedin.com/company/${name}/`;
    } else if (platform === "ios") {
      return `https://www.linkedin.com/company/${name}/`;
    } else {
      return `https://www.linkedin.com/company/${name}/`;
    }
  },

  telegram: (name) => {
    const platform = urlGenerators.getPlatform();

    if (platform === "android") {
      return `tg://resolve?domain=${name}`;
    } else if (platform === "ios") {
      return `tg://resolve?domain=${name}`;
    } else {
      return `https://t.me/${name}/`;
    }
  },

  viber: (name) => {
    const platform = urlGenerators.getPlatform();

    if (platform === "android" || platform === "ios") {
      return `viber://chat/?number=${name.replace("+", "%2B")}`;
    } else {
      return `viber://chat/?number=${name.replace("+", "%2B")}`;
    }
  },

  whatsapp: (phone) => {
    const platform = urlGenerators.getPlatform();

    if (platform === "android" || platform === "ios") {
      return `https://api.whatsapp.com/send?phone=${phone}`;
    } else {
      return "https://wa.me/" + phone;
    }
  },

  youtube: (name) => {
    const platform = urlGenerators.getPlatform();

    if (platform === "android") {
      return `https://www.youtube.com/@${name}/`;
    } else if (platform === "ios") {
      return `https://www.youtube.com/@${name}/`;
    } else {
      return `https://www.youtube.com/@${name}/`;
    }
  },

  odnoklassniki: (id) => {
    const platform = urlGenerators.getPlatform();

    if (platform === "android") {
      // return `odnoklassniki://ok.ru/${id}`;
      return `https://m.ok.ru/profile/${id}`;
    } else if (platform === "ios") {
      return `https://m.ok.ru/profile/${id}`;
    } else {
      return `https://ok.ru/profile/${id}`;
    }
  },

  vk: (id) => {
    const platform = urlGenerators.getPlatform();

    if (platform === "android") {
      return `vk://vk.com/${id}`;
    } else if (platform === "ios") {
      return `vk://vk.com/${id}`;
    } else {
      return `https://vk.com/${id}/`;
    }
  },

  snapchat: (name) => {
    const platform = urlGenerators.getPlatform();

    if (platform === "android" || platform === "ios") {
      return `https://www.snapchat.com/add/${name}`;
    } else {
      return `https://www.snapchat.com/add/${name}`;
    }
  },

  twitter: (name) => {
    const platform = urlGenerators.getPlatform();

    if (platform === "android") {
      return `intent://twitter.com/${name}?screen_name=${name}/#Intent;package=com.twitter.android;scheme=https;end`;
    } else if (platform === "ios") {
      return `twitter://user?screen_name=${name}`;
    } else {
      return `https://twitter.com/${name}/`;
    }
  },

  line: (name) => {
    const platform = urlGenerators.getPlatform();

    if (platform === "android" || platform === "ios") {
      return `https://line.me/R/ti/p/@${name}`;
    } else {
      return `https://line.me/R/ti/p/@${name}`;
    }
  },

  skype: (name) => {
    const platform = urlGenerators.getPlatform();

    if (platform === "android" || platform === "ios") {
      return `skype:${name}?chat`;
    } else {
      return `skype:${name}?chat`;
    }
  },

  spotify: (id) => {
    const platform = urlGenerators.getPlatform();

    if (platform === "android" || platform === "ios") {
      return `spotify:user:${id}`;
    } else {
      return `https://open.spotify.com/user/${id}/`;
    }
  },

  soundcloud: (id) => {
    const platform = urlGenerators.getPlatform();

    if (platform === "android" || platform === "ios") {
      return `https://soundcloud.com/${id}/`;
    } else {
      return `https://soundcloud.com/${id}/`;
    }
  },

  pinterest: (id) => {
    const platform = urlGenerators.getPlatform();

    if (platform === "android" || platform === "ios") {
      return `pinterest://user/${id}/`;
    } else {
      return `https://www.pinterest.com/${id}/`;
    }
  },

  // discord: (id) => {
  //     const platform = urlGenerators.getPlatform();

  //     if (platform === 'android' || platform === 'ios') {
  //         return `https://discordapp.com/users/${id}`;
  //     } else {
  //         return `https://discordapp.com/users/${id}`;
  //     }
  // },

  twitch: (id) => {
    const platform = urlGenerators.getPlatform();

    if (platform === "ios") {
      return `twitch://user/${id}`;
    } else if (platform === "android") {
      return `https://www.twitch.tv/${id}/`;
    } else {
      return `https://www.twitch.tv/${id}/`;
    }
  },

  reddit: (id) => {
    const platform = urlGenerators.getPlatform();

    if (platform === "ios") {
      return `https://www.reddit.com/user/${id}`;
    } else if (platform === "android") {
      return `https://www.reddit.com/user/${id}`;
    } else {
      return `https://www.reddit.com/user/${id}`;
    }
  },

  researchgate: (id) => {
    const platform = urlGenerators.getPlatform();

    if (platform === "ios") {
      return `https://www.researchgate.net/profile/${id}`;
    } else if (platform === "android") {
      return `https://www.researchgate.net/profile/${id}`;
    } else {
      return `https://www.researchgate.net/profile/${id}`;
    }
  },

  threads: (id) => {
    const platform = urlGenerators.getPlatform();

    if (platform === "ios") {
      return `https://www.threads.net/${id}`;
    } else if (platform === "android") {
      return `https://www.threads.net/${id}`;
    } else {
      return `https://www.threads.net/${id}`;
    }
  },

  rutube: (id) => {
    const platform = urlGenerators.getPlatform();

    if (platform === "ios") {
      return `https://rutube.ru/channel/${id}`;
    } else if (platform === "android") {
      return `https://rutube.ru/channel/${id}`;
    } else {
      return `https://rutube.ru/channel/${id}`;
    }
  },

  yandexzen: (id) => {
    const platform = urlGenerators.getPlatform();

    if (platform === "ios") {
      return `https://dzen.ru/${id}`;
    } else if (platform === "android") {
      return `https://dzen.ru/${id}`;
    } else {
      return `https://dzen.ru/${id}`;
    }
  },

  bookingcom: (id) => {
    const platform = urlGenerators.getPlatform();

    if (platform === "ios") {
      return `https://www.booking.com/${id}`;
    } else if (platform === "android") {
      return `https://www.booking.com/${id}`;
    } else {
      return `https://www.booking.com/${id}`;
    }
  },

  airbnb: (id) => {
    const platform = urlGenerators.getPlatform();

    if (platform === "ios") {
      return `https://www.airbnb.com/h/${id}`;
    } else if (platform === "android") {
      return `https://www.airbnb.com/h/${id}`;
    } else {
      return `https://www.airbnb.com/h/${id}`;
    }
  },

  googleReviews: (id) => {
    const platform = urlGenerators.getPlatform();

    if (platform === "ios") {
      return `https://search.google.com/local/writereview?placeid=${id}`;
    } else if (platform === "android") {
      return `https://search.google.com/local/writereview?placeid=${id}`;
    } else {
      return `https://search.google.com/local/writereview?placeid=${id}`;
    }
  },
  tripadvisorReviews: (id) => {
    const platform = urlGenerators.getPlatform();

    if (platform === "ios") {
      return `https://www.tripadvisor.com/UserReviewEdit-${id}.html`;
    } else if (platform === "android") {
      return `https://www.tripadvisor.com/UserReviewEdit-${id}.html`;
    } else {
      return `https://www.tripadvisor.com/UserReviewEdit-${id}.html`;
    }
  },
  yandexReviews: (id) => {
    return `https://yandex.com/maps/org/${id}/reviews/?add-review=true`;
  },
  facebookReviews: (id) => {
    return `https://www.facebook.com/${id}/reviews`;
  },
  nextdoor: (id) => {
    const platform = urlGenerators.getPlatform();

    if (platform === "ios") {
      return `https://nextdoor.com/pages/${id}`;
    } else if (platform === "android") {
      return `https://nextdoor.com/pages/${id}`;
    } else {
      return `https://nextdoor.com/pages/${id}`;
    }
  },
  phone: (name) => {
    return `tel:${name}`;
  },
  website: (name) => {
    if (name.includes("http") || name.includes("tel:")) {
      return name;
    } else {
      return `http://${name}`;
    }
  },
  email: (name) => {
    return `mailto:${name}`;
  },
  address: (name) => {
    return `https://yandex.ru/maps/?text=${name}&z=12`;
  },
  link: (name) => {
    if (name.includes("http") || name.includes("tel:")) {
      return name;
    } else {
      return `http://${name}`;
    }
  },
  glovo: (id) => {
    return `https://glovoapp.com/${id}`;
  },
};

export const allSocialLinksData = {
  Recommended: {
    Instagram: {
      icon: "fa-brands fa-instagram",
      color: "#ff3040",
      urlGenerator: urlGenerators["instagram"],
      placeholder: "Enter Instagram username",
    },
    Facebook: {
      icon: "fa-brands fa-facebook",
      color: "#1a77f2",
      urlGenerator: urlGenerators["facebook"],
      placeholder: "Enter Facebook username or ID",
    },
    "LinkedIn (personal)": {
      icon: "fa-brands fa-linkedin",
      color: "#0b66c2",
      urlGenerator: urlGenerators["linkedin"],
      placeholder: "Enter LinkedIn username",
    },
    TikTok: {
      icon: "fa-brands fa-tiktok",
      color: "#111111",
      urlGenerator: urlGenerators["tiktok"],
      placeholder: "Enter TikTok username",
    },
    Twitter: {
      icon: "fa-brands fa-twitter",
      color: "#1da1f2",
      urlGenerator: urlGenerators["twitter"],
      placeholder: "Enter Twitter handle",
    },
    YouTube: {
      icon: "fa-brands fa-youtube",
      color: "#ff0000",
      urlGenerator: urlGenerators["youtube"],
      placeholder: "Enter YouTube username",
    },
    WhatsApp: {
      icon: "fa-brands fa-whatsapp",
      color: "#25d366",
      urlGenerator: urlGenerators["whatsapp"],
      placeholder: "Enter WhatsApp number",
    },
    Telegram: {
      icon: "fa-brands fa-telegram",
      color: "#0088cc",
      urlGenerator: urlGenerators["telegram"],
      placeholder: "Enter Telegram username",
    },
    Glovo: {
      icon: "fa-glovo",
      color: "#FFC244",
      urlGenerator: urlGenerators["glovo"],
      placeholder: "Enter Glovo id or username",
    },
  },
  Socials: {
    Instagram: {
      icon: "fa-brands fa-instagram",
      color: "#ff3040",
      urlGenerator: urlGenerators["instagram"],
      placeholder: "Enter Instagram username",
    },
    TikTok: {
      icon: "fa-brands fa-tiktok",
      color: "#111111",
      urlGenerator: urlGenerators["tiktok"],
      placeholder: "Enter TikTok username",
    },
    Facebook: {
      icon: "fa-brands fa-facebook",
      color: "#1a77f2",
      urlGenerator: urlGenerators["facebook"],
      placeholder: "Enter Facebook username or ID",
    },
    Messenger: {
      icon: "fa-brands fa-facebook-messenger",
      color: "#1a77f2",
      urlGenerator: urlGenerators["messenger"],
      placeholder: "Enter Messenger username or ID",
    },
    "LinkedIn (personal)": {
      icon: "fa-brands fa-linkedin",
      color: "#0b66c2",
      urlGenerator: urlGenerators["linkedin"],
      placeholder: "Enter LinkedIn username",
    },
    "LinkedIn (company)": {
      icon: "fa-brands fa-linkedin",
      color: "#0b66c2",
      urlGenerator: urlGenerators["linkedinCo"],
      placeholder: "Enter LinkedIn Company name",
    },
    Telegram: {
      icon: "fa-brands fa-telegram",
      color: "#3290ec",
      urlGenerator: urlGenerators["telegram"],
      placeholder: "Enter Telegram username",
    },
    Viber: {
      icon: "fa-brands fa-viber",
      color: "#6247c3",
      urlGenerator: urlGenerators["viber"],
      placeholder: "Enter Viber number",
    },
    WhatsApp: {
      icon: "fa-brands fa-whatsapp",
      color: "#24d366",
      urlGenerator: urlGenerators["whatsapp"],
      placeholder: "Enter WhatsApp number",
    },
    YouTube: {
      icon: "fa-brands fa-youtube",
      color: "#ff0000",
      urlGenerator: urlGenerators["youtube"],
      placeholder: "Enter YouTube username",
    },
    Odnoklassniki: {
      icon: "fa-brands fa-odnoklassniki",
      color: "#ff7701",
      urlGenerator: urlGenerators["odnoklassniki"],
      placeholder: "Enter Odnoklassniki username or ID",
    },
    VK: {
      icon: "fa-brands fa-vk",
      color: "#0277ff",
      urlGenerator: urlGenerators["vk"],
      placeholder: "Enter VKontakte username or ID",
    },
    Snapchat: {
      icon: "fa-brands fa-snapchat",
      color: "#ffe300",
      urlGenerator: urlGenerators["snapchat"],
      placeholder: "Enter Snapchat username",
    },
    Twitter: {
      icon: "fa-brands fa-x-twitter",
      color: "#000000",
      urlGenerator: urlGenerators["twitter"],
      placeholder: "Enter Twitter handle",
    },
    Line: {
      icon: "fa-brands fa-line",
      color: "#03c755",
      urlGenerator: urlGenerators["line"],
      placeholder: "Enter Line ID",
    },
    Skype: {
      icon: "fa-brands fa-skype",
      color: "#009EDC",
      urlGenerator: urlGenerators["skype"],
      placeholder: "Enter Skype username",
    },
    Spotify: {
      icon: "fa-brands fa-spotify",
      color: "#1cd760",
      urlGenerator: urlGenerators["spotify"],
      placeholder: "Enter Spotify username",
    },
    SoundCloud: {
      icon: "fa-brands fa-soundcloud",
      color: "#ff5602",
      urlGenerator: urlGenerators["soundcloud"],
      placeholder: "Enter SoundCloud username",
    },
    Pinterest: {
      icon: "fa-brands fa-pinterest",
      color: "#e60022",
      urlGenerator: urlGenerators["pinterest"],
      placeholder: "Enter Pinterest username or ID",
    },
    Twitch: {
      icon: "fa-brands fa-twitch",
      color: "#a96fff",
      urlGenerator: urlGenerators["twitch"],
      placeholder: "Enter Twitch username",
    },
    Reddit: {
      icon: "fa-brands fa-reddit",
      color: "#ff3300",
      urlGenerator: urlGenerators["reddit"],
      placeholder: "Enter Reddit username",
    },
    Threads: {
      icon: "fa-brands fa-threads",
      color: "#000000",
      urlGenerator: urlGenerators["threads"],
      placeholder: "Enter Threads username or ID",
    },
    ResearchGate: {
      icon: "fa-brands fa-researchgate",
      color: "#00CCBB",
      urlGenerator: urlGenerators["researchgate"],
      placeholder: "Enter ResearchGate username",
    },
    RUTube: {
      icon: "fa-ru-tube",
      color: "#F41240",
      urlGenerator: urlGenerators["rutube"],
      placeholder: "Enter RUTube username or ID",
    },
    YandexZen: {
      icon: "fa-yandex-zen",
      color: "#000",
      urlGenerator: urlGenerators["yandexzen"],
      placeholder: "Enter Yandex Zen username or ID",
    },
    "Booking.com": {
      icon: "fa-booking-com",
      color: "#006CE4",
      urlGenerator: urlGenerators["bookingcom"],
      placeholder: "Enter Booking.com ID",
    },
    AirBnB: {
      icon: "fa-brands fa-airbnb",
      color: "#FF385C",
      urlGenerator: urlGenerators["airbnb"],
      placeholder: "Enter AirBnB ID",
    },
  },
  Reviews: {
    GoogleReviews: {
      icon: "fa-brands fa-google",
      color: "#4285F4",
      urlGenerator: urlGenerators["googleReviews"],
      placeholder: "Enter Google Place ID",
    },
    TripadvisorReviews: {
      icon: "fa-trip-advisor",
      color: "#34E0A1",
      urlGenerator: urlGenerators["tripadvisorReviews"],
      placeholder: "Enter Tripadvisor Review ID",
    },
    YandexReviews: {
      icon: "fa-brands fa-yandex-international",
      color: "#fc3f1d",
      urlGenerator: urlGenerators["yandexReviews"],
      placeholder: "Enter Yandex Place ID",
    },
    FacebookReviews: {
      icon: "fa-brands fa-facebook",
      color: "#1a77f2",
      urlGenerator: urlGenerators["facebookReviews"],
      placeholder: "Enter Facebook Page ID",
    },
  },
  Travel: {
    Nextdoor: {
      icon: "fa-nextdoor",
      color: "#93d500",
      urlGenerator: urlGenerators["nextdoor"],
      placeholder: "Enter Nextdoor Page ID",
    },
  },
  Contact: {
    Messenger: {
      icon: "fa-brands fa-facebook-messenger",
      color: "#1a77f2",
      urlGenerator: urlGenerators["messenger"],
      placeholder: "Enter Messenger username or ID",
    },
    Skype: {
      icon: "fa-brands fa-skype",
      color: "#009EDC",
      urlGenerator: urlGenerators["skype"],
      placeholder: "Enter Skype username",
    },
    WhatsApp: {
      icon: "fa-brands fa-whatsapp",
      color: "#24d366",
      urlGenerator: urlGenerators["whatsapp"],
      placeholder: "Enter WhatsApp number",
    },
    Viber: {
      icon: "fa-brands fa-viber",
      color: "#6247c3",
      urlGenerator: urlGenerators["viber"],
      placeholder: "Enter Viber number",
    },
    Telegram: {
      icon: "fa-brands fa-telegram",
      color: "#3290ec",
      urlGenerator: urlGenerators["telegram"],
      placeholder: "Enter Telegram username",
    },
    Phone: {
      icon: "fa-phone",
      color: "#33FF57",
      urlGenerator: urlGenerators["phone"],
      placeholder: "Enter phone number",
    },
    Website: {
      icon: "fa-globe",
      color: "#000000",
      urlGenerator: urlGenerators["website"],
      placeholder: "Enter website URL",
    },
    Email: {
      icon: "fa-envelope",
      color: "#FF5733",
      urlGenerator: urlGenerators["email"],
      placeholder: "Enter email address",
    },
    Address: {
      icon: "fa-map-marker-alt",
      color: "#FFC300",
      urlGenerator: urlGenerators["address"],
      placeholder: "Enter address",
    },
  },
};
export const getSocialLinks = () => {
  let socialLinks = {};
  Object.values(allSocialLinksData).forEach((category) => {
    Object.entries(category).forEach(([key, value]) => {
      socialLinks[key] = value;
    });
  });
  return socialLinks;
};
