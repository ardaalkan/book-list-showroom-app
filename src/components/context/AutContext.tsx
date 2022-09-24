import { createContext, useContext, useState, useEffect } from "react";
import React from "react";
import { auth, db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { doc, setDoc } from "firebase/firestore";

type UserContextProps = {
  children: React.ReactNode;
};

type UserContextType = {
  signUp: any;
  signIn: any;
  logout: any;
  user: any;
};

const UserContext = createContext({} as UserContextType);

export function useUserContext() {
  return useContext(UserContext);
}

export const AuthContextProvider = ({ children }: UserContextProps) => {
  const [user, setUser] = useState({});

  const signUp = (email: any, password: any) => {
    createUserWithEmailAndPassword(auth, email, password);
    return setDoc(doc(db, "users", email), {
      watchList: [],
    });
  };
  const signIn = (email: any, password: any) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser: any) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={{ signUp, signIn, logout, user }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
