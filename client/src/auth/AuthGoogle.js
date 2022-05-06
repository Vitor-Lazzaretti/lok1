import React, { createContext, useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from './firebase/firebase';
const provider = new GoogleAuthProvider();

export const AuthGoogleContext = createContext();

export const AuthGoogleProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const auth = getAuth(app);

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
          .then((res) => {
            const credential = GoogleAuthProvider.credentialFromResult(res);
            const token = credential.accessToken;
            const user = res.user;

            setUser(user);

            sessionStorage.setItem("@Lok1Firebase:token", token);
            sessionStorage.setItem("@Lok1Firebase:user", JSON.stringify(user));
          }).catch((err) => {
            const errorCode = err.code;
            const errorMessage = err.message;
            const email = err.email;
          }) ;
      };
  return (
    <AuthGoogleContext.Provider value={{signInWithGoogle, signed: !!user }}>
      {children}
    </AuthGoogleContext.Provider>
  )
}
