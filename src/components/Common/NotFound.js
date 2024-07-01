import { BASE_PUBLIC_PATH } from "@/constants/constants";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("cardNotFound.pagetitle")} | Mibio</title>
      </Head>

      <header className="absolute top-12 left-12">
        <Link href="/">
          <Image
            className="w-32"
            src="/assets/images/logo/logo-light.svg"
            alt="Mibio Logo"
            width={400}
            height={200}
          />
        </Link>
      </header>

      <div className="h-screen w-screen flex flex-col justify-center items-center gap-8">
        <div className="relative max-w-7xl mx-auto min-h-[300px] px-4">
          <Image
            src="/assets/images/common/404.png"
            alt="Mibio 404 page not found"
            width={1057}
            height={658}
            className="object-contain sm:max-w-lg"
          />
        </div>

        <h1 className="sm:text-3xl text-2xl font-semibold text-neutral-500 -mt-8">
          {t("cardNotFound.title")}
        </h1>

        <div className="text-center text-lg">
          <Link
            href={`${BASE_PUBLIC_PATH}/login`}
            className="text-white bg-gradient-to-r to-cyan-500 from-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg text-2xl px-5 py-2.5 text-center mb-2">
            {t("cardNotFound.button")}
          </Link>
        </div>
      </div>
    </>
  );
}
