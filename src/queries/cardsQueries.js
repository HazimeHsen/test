import { db } from "@/firebase/clientApp";
import {
  collection,
  collectionGroup,
  doc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";

export async function getUserSingleCard(uid) {
  const q = query(collectionGroup(db, "cards"), where("uid", "==", uid));

  const cards = await getDocs(q);

  if (cards.empty) return [];

  return {
    card: cards.docs[0].data(),
    cardRef: cards.docs[0].ref,
  };
}
export async function getCardByUserIdAndQueryId(uid, queryId) {
  const userRef = doc(db, "users", uid);
  const cardsSnapshot = await getDocs(collection(userRef, "cards"));

  if (cardsSnapshot.empty) return null;

  for (const cardDoc of cardsSnapshot.docs) {
    const cardData = cardDoc.data();
    if (
      cardData?.queryId !== undefined &&
      cardData?.queryId === Number(queryId)
    ) {
      return cardData;
    }
  }

  return null;
}

export async function checkCardExists(userName) {
  const q = query(
    collectionGroup(db, "cards"),
    where("lowerCaseUserName", "==", userName.toLowerCase())
  );

  const cards = await getDocs(q);

  return !cards.empty;
}

export async function getUserAllCards(userId) {
  const userRef = doc(db, "users", userId);

  const cardsSnapshot = await getDocs(collection(userRef, "cards"));

  const cards = [];

  if (cardsSnapshot.empty) return [];

  cardsSnapshot.forEach((c) => {
    cards.push(c.data());
  });

  return cards;
}
