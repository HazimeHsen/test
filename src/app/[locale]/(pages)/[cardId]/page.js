import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/Common/TranslationsProvider";
import RequestIsNormal from "@/components/ProfileCard/RequestIsNormal";
import getCardAndUserId from "@/lib/getCardAndUserId";

const i18nNamespaces = ["common"];

export async function generateMetadata({ params }) {
  const { cardId } = params;
  const { card, userId } = await getCardAndUserId(cardId);

  return {
    title:
      card?.details?.name?.length > 0
        ? card?.details?.name + " | Mibio"
        : card?.userName != undefined
        ? card?.userName + " | Mibio"
        : "404 | Mibio",
    icons: {
      icon: [
        {
          url: card?.profilePhoto || "/assets/images/logo/logo-graphical.svg",
        },
      ],
    },
  };
}

export default async function UserPage({ params }) {
  const { t, resources } = await initTranslations(
    params.locale,
    i18nNamespaces
  );
  const { cardId } = params;
  const { card, userId } = await getCardAndUserId(cardId);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={params.locale}
      resources={resources}>
      <RequestIsNormal />
    </TranslationsProvider>
  );
}
