import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import "firebase/auth";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import { getStorage } from "firebase/storage";

const app = initializeApp({
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
});

// const appVerifier = initializeAppCheck(app, {
//     provider: new ReCaptchaV3Provider(process.env.NEXT_PUBLIC_RECAPTCHA_KEY_ID),
//     isTokenAutoRefreshEnabled: true,
// });

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

// export {app, db, auth, storage, appVerifier};
export { app, db, auth, storage };
