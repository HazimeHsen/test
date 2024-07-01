import Image from "next/image";
import React from "react";
import initTranslations from "./i18n";

export const metadata = {
  title: "404 | Mibio",
};

export default async function Notfound({ params }) {
  const { t } = await initTranslations("en", ["errorPages"]);

  return (
    <>
      <header className="absolute top-12 left-12">
        <a href="https://mibio.bio">
          <Image
            className="w-32"
            src="/assets/images/logo/logo-light.svg"
            alt="Mibio Logo"
            width={400}
            height={200}
          />
        </a>
      </header>
      <div className="h-screen w-screen flex flex-col justify-center items-center gap-8">
        <div className="relative max-w-7xl mx-auto min-h-[300px] px-4">
          <Image
            src="/assets/images/common/404.png"
            alt="Page not found image"
            width={1057}
            height={658}
            className="object-contain sm:max-w-lg"
          />
        </div>

        <h1 className="sm:text-3xl text-2xl font-semibold text-neutral-500 -mt-8">
          {t("errorPages:404.page")}
        </h1>

        <div className="text-center text-lg">
          <a
            href="https://www.mibio.am/collections/cards"
            className="text-white bg-gradient-to-r to-cyan-500 from-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg text-2xl px-5 py-2.5 text-center mb-2">
            {t("errorPages:404.card")}
          </a>
        </div>
      </div>
    </>
  );
}
