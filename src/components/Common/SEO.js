"use client";
import Head from "next/head";
import React from "react";
import { useTranslation } from "react-i18next";

export default function SEO({ title }) {
  const { t } = useTranslation();

  return (
    <Head>
      <title>{`${title} | Mibio`}</title>
      <meta name="test" content="working" />
      <meta name="description" content={t("seoDescription")} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@mibio.am" />
      <meta name="twitter:title" content={`${title} | Mibio`} />
      <meta name="twitter:description" content={t("seoDescription")} />
      <meta
        name="twitter:image"
        content="https://www.mibio.bio/assets/images/seo/logo-bg.png"
      />
      <meta name="twitter:image:alt" content="Mibio.am logo" />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Mibio" />
      <meta property="og:url" content="https://www.mibio.bio" />
      <meta property="og:description" content={t("seoDescription")} />
      <meta property="og:title" content={`${title} | Mibio`} />
      <meta
        property="og:image"
        content="https://www.mibio.bio/assets/images/seo/og-img.png"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="628" />
    </Head>
  );
}
