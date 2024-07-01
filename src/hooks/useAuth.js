"use client";

import { auth, db } from "@/firebase/clientApp";
import {
  useContext,
  createContext,
  useState,
  useEffect,
  useRef,
  useMemo,
} from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signOut,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  applyActionCode,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  verifyPasswordResetCode,
  confirmPasswordReset,
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
} from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { useRouter } from "next/navigation";
import { BASE_PUBLIC_PATH } from "@/constants/constants";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

function userFireBaseDataConstructor(user) {
  let { firstName, lastName, metadata: userMetaData, photoURL, uid } = user;

  return {
    firstName,
    lastName,
    photoURL,
    uid,
    metadata: {
      createdAt: userMetaData.createdAt,
      creationTime: userMetaData.creationTime,
      lastLoginAt: userMetaData.lastLoginAt,
      lastSignInTime: userMetaData.lastSignInTime,
    },
  };
}

const authContext = createContext();

export default function useAuth() {
  return useContext(authContext);
}

export function AuthProvider({ children, props }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        const loggedViaPassword = firebaseUser.providerData.some((profile) => {
          return profile.providerId === "password";
        });

        if (!firebaseUser.emailVerified && loggedViaPassword)
          return router.push(`${BASE_PUBLIC_PATH}/login?unverifiedEmail=true`);

        const userRef = doc(db, "users", firebaseUser.uid);
        const userDbData = userFireBaseDataConstructor(firebaseUser);

        getDoc(userRef)
          .then((userDataBase) => {
            if (userDataBase.exists()) {
              setUser((prev) => ({
                ...prev,
                ...userDbData,
                ...userDataBase.data(),
              }));
            }
          })
          .finally(() => {
            setLoading(false);
          });
      } else {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });

    const { user } = await signInWithPopup(auth, provider);
    const userRef = doc(db, "users", user.uid);
    const userData = await getDoc(userRef);

    if (userData.exists())
      return setUser((prev) => ({
        ...prev,
        ...userFireBaseDataConstructor(user),
        ...userData.data(),
      }));

    const [firstName, lastName] = user.displayName.split(" ");
    const photoURL = user.photoURL.replace("s96", "s256");
    const uid = user.uid;
    const email = user.email;

    const userDbData = userFireBaseDataConstructor({
      ...user,
      email,
      uid,
      firstName,
      lastName,
      photoURL,
    });
    await setDoc(userRef, {
      email,
      uid,
      firstName,
      lastName,
      photoURL,
    });
    setUser((prev) => ({
      ...prev,
      ...userDbData,
    }));
  };

  const loginWithFacebook = async () => {
    const provider = new FacebookAuthProvider();
    provider.addScope("public_profile");
    provider.setCustomParameters({
      prompt: "select_account",
      display: "popup",
    });

    const result = await signInWithPopup(auth, provider);
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    const userRef = doc(db, "users", result.user.uid);
    const userData = await getDoc(userRef);

    if (userData.exists())
      return setUser((prev) => ({
        ...prev,
        ...userFireBaseDataConstructor(result.user),
        ...userData.data(),
      }));

    const [firstName, lastName] = result.user.displayName.split(" ");
    const photoURL = result.user.photoURL + "?height=500&access_token=" + token;
    const uid = user.uid;
    const email = user.email;

    const userDbData = userFireBaseDataConstructor({
      ...result.user,
      email,
      uid,
      firstName,
      lastName,
      photoURL,
    });

    await setDoc(userRef, {
      email,
      uid,
      firstName,
      lastName,
      photoURL,
    });
    setUser((prev) => ({
      ...prev,
      ...userDbData,
    }));
  };

  const registerWithEmail = async (email, password) => {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await sendEmailVerification(user);
    const userRef = doc(db, "users", user.uid);

    await setDoc(userRef, {
      uid: user.uid,
      email: user.email,
    });

    await signOut(auth);
  };

  const signInWithEmail = async (email, password) => {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    if (!user.emailVerified) {
      await signOut(auth);
    } else {
      const userRef = doc(db, "users", user.uid);
      const userData = await getDoc(userRef);

      if (userData.exists())
        return setUser((prev) => ({
          ...prev,
          ...userFireBaseDataConstructor(user),
          ...userData.data(),
        }));
    }
  };

  const changePassword = async (currentPassword, newPassword) => {
    const credential = EmailAuthProvider.credential(
      user.email,
      currentPassword
    );
    const localUser = auth.currentUser;

    await reauthenticateWithCredential(localUser, credential);
    await updatePassword(localUser, newPassword);
  };

  const resetPasswordRequest = async (email) => {
    await sendPasswordResetEmail(auth, email);
  };

  const confirmUserEmail = async (oobCode) => {
    await applyActionCode(auth, oobCode);
  };

  const verifyPasswordReset = async (oobCode) => {
    await verifyPasswordResetCode(auth, oobCode);
  };

  const confirmPasswordResetFn = async (oobCode, password) => {
    await confirmPasswordReset(auth, oobCode, password);
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  const value = useMemo(
    () => ({
      user,
      setUser,
      loading,
      loginWithGoogle,
      loginWithFacebook,
      registerWithEmail,
      signInWithEmail,
      changePassword,
      confirmUserEmail,
      confirmPasswordResetFn,
      verifyPasswordReset,
      resetPasswordRequest,
      logout,
    }),
    [user, loading]
  );

  return (
    <authContext.Provider value={value} {...props}>
      {children}
    </authContext.Provider>
  );
}
