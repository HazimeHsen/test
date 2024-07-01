import { db } from '@/firebase/clientApp';
import { query, collection, where, orderBy, limit, getDocs } from 'firebase/firestore';

async function getTotalInsightsCount(userId, userName) {
    const insightsCollectionRef = collection(db, `users/${userId}/cards/${userName}/insights`);

    const querySnapshot = await getDocs(insightsCollectionRef);

    return querySnapshot.size;
}

async function getLatestInsight(userId, userName) {
    const insightsCollectionRef = collection(db, `users/${userId}/cards/${userName}/insights`);

    const qLatest = query(insightsCollectionRef, orderBy('timestamp', 'desc'), limit(1));

    const querySnapshot = await getDocs(qLatest);

    if (!querySnapshot.empty) {
        const latestInsightDoc = querySnapshot.docs[0];
        return latestInsightDoc.data();
    }

    return null; // Return null if no latest insight is found
}

// TODO
export async function getUserInsights(userId, userName, start, end) {
    const insightsCollectionRef = collection(db, `users/${userId}/cards/${userName}/insights`);
    const latestInsight = await getLatestInsight(userId, userName);

    const totalInsightsCount = await getTotalInsightsCount(userId, userName);

    const queryPromises = [];
    const insights = [];
    const previousInsights = [];

    const numberOfDays = Math.floor((end - start) / (24 * 60 * 60 * 1000)) + 1;

    const qSelected = query(insightsCollectionRef, where('timestamp', '>=', start.getTime()), where('timestamp', '<=', end.getTime()));
    queryPromises.push(getDocs(qSelected));

    const previousStart = new Date(start);
    previousStart.setDate(previousStart.getDate() - numberOfDays);

    const qPrevious = query(insightsCollectionRef, where('timestamp', '>=', previousStart.getTime()), where('timestamp', '<', start.getTime()));
    queryPromises.push(getDocs(qPrevious));

    const querySnapshots = await Promise.all(queryPromises);

    querySnapshots[0].forEach((doc) => {
        insights.push(doc.data());
    });

    querySnapshots[1].forEach((doc) => {
        previousInsights.push(doc.data());
    });

    return {
        insights,
        totalInsightsCount,
        previousInsights,
        previousStart,
        latestInsight,
    };
}