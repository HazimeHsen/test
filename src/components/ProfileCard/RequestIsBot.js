"use client";
import Head from "next/head";
import NotFound from "../Common/NotFound";
import transformSummaryToMeta from "@/lib/transformSummaryToMeta";

function RequestIsBot({ card, userId }) {
  if (!card) return <NotFound />;

  function findContactField(type) {
    const array = card?.links?.length > 0 ? card.links : [];
    return array.find((el) => el.type == type)?.name;
  }

  const contact = {
    website: findContactField("Website"),
    address: findContactField("Address"),
    url: findContactField("Link"),
    phone: findContactField("Phone"),
  };

  const SEOTitle = card?.details?.name
    ? card.details.name + " | Mibio"
    : card.userName != undefined
    ? card.userName + " | Mibio"
    : "Mibio";

  const SEODescription =
    card?.details?.bio?.length > 0
      ? transformSummaryToMeta(card.details.bio)
      : `Connect effortlessly with ${card.userName} and discover the power of personalized networking with Mibio's innovative smart business cards. `;

  let twitterForSEO = "";

  if (card.links != undefined) {
    card?.links?.forEach(({ name, type }) => {
      if (type === "Twitter" || type === "twitter") twitterForSEO = name;
    });
  }

  return (
    <Head>
      <>
        <title>{SEOTitle}</title>
        <meta name="description" content={SEODescription} />

        <meta name="twitter:card" content="summary" />
        {twitterForSEO.length > 0 && (
          <meta name="twitter:site" content={"@" + twitterForSEO} />
        )}
        <meta name="twitter:title" content={SEOTitle} />
        <meta name="twitter:description" content={SEODescription} />

        {card?.profilePhoto?.length > 0 && (
          <meta name="twitter:image" content={card.profilePhoto} />
        )}
        <meta
          name="twitter:image:alt"
          content={"Profile picture of " + card.userName}
        />

        <meta property="og:type" content="profile" />
        <meta property="og:site_name" content="Mibio" />
        <meta
          property="og:url"
          content={"https://www.mibio.bio/" + card.userName}
        />
        <meta property="og:description" content={SEODescription} />
        <meta property="og:title" content={SEOTitle} />
        {card?.profilePhoto?.length > 0 && (
          <meta property="og:image" content={card.profilePhoto} />
        )}
        {card?.profilePhoto?.length > 0 && (
          <>
            <meta property="og:image" content={card.profilePhoto} />
            <meta property="og:image:width" content={card.profilePhoto.width} />
            <meta
              property="og:image:height"
              content={card.profilePhoto.height}
            />
          </>
        )}

        {card?.details?.name?.length > 0 && (
          <meta property="og:contact_data:name" content={card.details.name} />
        )}
        {card?.details?.email?.length > 0 && (
          <meta property="og:contact_data:email" content={card.details.email} />
        )}
        {contact?.phone?.length > 0 && (
          <meta
            property="og:contact_data:phone_number"
            content={contact.phone}
          />
        )}
        {contact?.website?.length > 0 && (
          <meta property="og:contact_data:website" content={contact.website} />
        )}
      </>
    </Head>
  );
}
export default RequestIsBot;
