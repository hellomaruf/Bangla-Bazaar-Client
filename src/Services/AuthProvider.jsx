import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "./../Firebase/firebase.config";

export const AuthContaxt = createContext(null);
function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const authInfo = {
    createNewUser,
    loading,
  };

  return (
    <AuthContaxt.Provider value={authInfo}>{children}</AuthContaxt.Provider>
  );
}

export default AuthProvider;
