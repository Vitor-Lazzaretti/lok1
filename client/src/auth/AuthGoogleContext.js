import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from './firebase/firebase';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';

const AuthGoogleContext = createContext({
  currentUser: null,
  signInWithGoogle: () => new Promise(),
  logout: () => new Promise(),
});

export const useAuth = () => useContext(AuthGoogleContext);

export default function AuthGoogleProvider({children}) {
  const [currentUser, setCurrentUser] = useState(null);
 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user);
    });
    return () => {
      unsubscribe();
    }
  }, [])

  function signInWithGoogle(){
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  }

  function logout() {
    return signOut(auth);
  }

  const value = {
    currentUser: currentUser,
    signInWithGoogle: signInWithGoogle,
    logout: logout,
  }

  return (
    <AuthGoogleContext.Provider value={value}>
      {children}
    </AuthGoogleContext.Provider>
  )
}
