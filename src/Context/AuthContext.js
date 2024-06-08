// AuthContext.js

import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

// Create Auth Context
const AuthContext = createContext();

// Auth Provider Component
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  // Sign Out Function
  const signOut = async () => {
    try {
      await auth.signOut();
      setCurrentUser(null); // Update the current user state
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Custom Hook to use Auth Context
export function useAuth() {
  return useContext(AuthContext);
}
