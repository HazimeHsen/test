import firebaseErrorsList from '@/constants/firebaseErrorsList';

export default function firebaseErrorHandler(code, lang) {
    const {en, hy} = firebaseErrorsList;
    code = code.replace('auth/', '');

    let list;
    if (lang === 'en') {
        list = en;
    } else {
        list = hy;
    }

    return list[code] ? list[code] : null;
}
