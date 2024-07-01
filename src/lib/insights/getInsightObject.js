import { db } from '@/firebase/clientApp';
import { doc, getDoc } from 'firebase/firestore';

// TODO
export async function getInsightObject(insightId, userName, userId) {
    const insightString = sessionStorage.getItem(insightId);

    if (insightString) {
        return JSON.parse(insightString);
    } else {
        const ref = doc(db, `users/${userId}/cards/${userName}/insights`, insightId);
        const allInsights = await getDoc(ref);
        const insight = allInsights.data();

        sessionStorage.setItem(insightId, JSON.stringify(insight));
        return insight;
    }
}
