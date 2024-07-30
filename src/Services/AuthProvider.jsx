import { createContext } from "react";

export const AuthContaxt = createContext(null);
function AuthProvider({ children }) {
  const name = "maruf";
  const authInfo = {
    name,
  };

  return (
    <AuthContaxt.Provider value={authInfo}>{children}</AuthContaxt.Provider>
  );
}

export default AuthProvider;
