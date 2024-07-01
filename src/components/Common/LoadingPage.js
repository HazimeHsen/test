import Head from "next/head";
import LoadingSpinner from "./LoadingSpinner";

export default function LoadingPage() {
  return (
    <>
      <Head>
        <title>Welcome to Mibio</title>
        <meta
          name="description"
          content="Tap your Mibio smart NFC business card to someone's phone to instantly share your information! No app needed. Easy contact sharing and analytics."
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@mibio.am" />
        <meta name="twitter:title" content="Welcome to Mibio" />
        <meta
          name="twitter:description"
          content="Tap your Mibio smart NFC business card to someone's phone to instantly share your information! No app needed. Easy contact sharing and analytics."
        />
        <meta
          name="twitter:image"
          content="https://www.mibio.bio/assets/images/seo/logo-bg.png"
        />
        <meta name="twitter:image:alt" content="Mibio.am logo" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Mibio" />
        <meta property="og:url" content="https://www.mibio.bio" />
        <meta
          property="og:description"
          content="Tap your Mibio smart NFC business card to someone's phone to instantly share your information! No app needed. Easy contact sharing and analytics."
        />
        <meta property="og:title" content="Welcome to Mibio" />
        <meta
          property="og:image"
          content="https://www.mibio.bio/assets/images/seo/og-img.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="628" />
      </Head>

      <div className="flex justify-center items-center h-screen">
        <LoadingSpinner size={10} />
      </div>
    </>
  );
}
