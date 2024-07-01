export default function areTimestampsAnHourApart(timestamp1, timestamp2) {
    const timeDifference = Math.abs(timestamp2 - timestamp1);

    return timeDifference >= 3600000;
}