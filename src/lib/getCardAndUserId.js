import { db } from '@/firebase/clientApp';
import { collectionGroup, getDocs, query, where } from 'firebase/firestore';

export default async function getCardAndUserId(userName) {
    const q1 = query(collectionGroup(db, 'cards'), where('uid', '==', userName));
    const cardSnapshot1 = await getDocs(q1);

    if (!cardSnapshot1.empty) {
        const card = cardSnapshot1.docs[0];
        const data = card.data();
        const userId = card.ref.parent.parent.id;

        return {
            card: data,
            userId,
            isUid: true,
        };
    }

    const q2 = query(collectionGroup(db, 'cards'), where('userName', '==', userName));
    const cardSnapshot2 = await getDocs(q2);

    if (cardSnapshot2.empty) {
        return {
            card: null,
            userId: '',
        };
    }

    const card = cardSnapshot2.docs[0];
    const data = card.data();
    const userId = card.ref.parent.parent.id;

    return {
        card: data,
        userId,
    };
}