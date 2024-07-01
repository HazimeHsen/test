"use client";
import { initGA, logPageView } from "@/ga";
import UserPageMibioStyle from "./UserPageMibioStyle";
import { useState, useEffect } from "react";
import getCardAndUserId from "@/lib/getCardAndUserId";
import getIpClientSide from "@/lib/insights/getIpClientSide";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase/clientApp";
import setCookie from "@/lib/cookies/setCookie";
import getCookie from "@/lib/cookies/getCookie";
import { getInsightObject } from "@/lib/insights/getInsightObject";
import LoadingPage from "../Common/LoadingPage";
import NotFound from "../Common/NotFound";
import { useParams, useRouter } from "next/navigation";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import arrayOfIcons from "@/fontAwesomeIconsExport";

config.autoAddCss = false;
library.add(...arrayOfIcons);

function RequestIsNormal() {
  const [card, setCard] = useState(null);
  const [pageIsLoading, setPageIsLoading] = useState(true);
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const router = useRouter();
  const { cardId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { card, userId } = await getCardAndUserId(cardId);
        if (card && userId) {
          setUserName(card?.uid ? card.uid : card.userName);
          setCard(card);
          setUserId(userId);
        }
      } catch (error) {
        console.error("Error fetching card data:", error);
      } finally {
        setPageIsLoading(false);
      }
    };

    if (cardId) {
      fetchData();
    }
  }, [cardId]);

  useEffect(() => {
    async function createNewInstance() {
      try {
        const ip = await getIpClientSide();

        const res = await fetch("/api/generateInsightObject", {
          method: "POST",
          body: JSON.stringify({ ip }),
          headers: {
            "content-type": "application/json",
          },
        });
        const { insight } = await res.json();

        const ref = doc(
          db,
          `users/${userId}/cards/${userName}/insights`,
          insight.insightId
        );
        await setDoc(ref, insight, { merge: true });

        setCookie("insightId", insight.insightId, cardId);

        sessionStorage.setItem(insight.insightId, JSON.stringify(insight));
      } catch (error) {
        console.log(error);
      }
    }

    if (card && userName !== "" && userId) {
      const insightId = getCookie("insightId");

      if (!insightId) {
        createNewInstance();
      } else {
        getInsightObject(insightId, userName, userId);
      }
    }
  }, [cardId, card, userName]);

  if (pageIsLoading) return <LoadingPage />;
  if (!card) return <NotFound />;
  if (card?.singleLink?.isOn) {
    router.push(card.singleLink.url);
    return <div></div>;
  }

  return (
    <>
      <div className="flex items-center justify-center h-full relative">
        <UserPageMibioStyle card={card} cardUserId={userId} />
      </div>
    </>
  );
}
export default RequestIsNormal;
