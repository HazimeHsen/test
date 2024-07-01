export default function transformSummaryToMeta(inputString) {
    let transformedString = inputString.replace(/<\/p>/g, ' \n');

    transformedString = transformedString.replace(/<[^>]+>/g, '');

    transformedString = transformedString.replace(/\s+/g, ' ').trim();

    if (transformedString.length > 320) {
        transformedString = transformedString.slice(0, 317) + '...';
    }

    return transformedString;
}
