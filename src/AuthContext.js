import React, { useState, useContext } from "react";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [authBackdrop, setAuthBackdrop] = useState(false);
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const [currentUser, setCurrentUser] = useState();
  const [token, setToken] = useState(null);
  const [expirationDate, setExpirationDate] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        authBackdrop,
        setAuthBackdrop,
        isLogedIn,
        setIsLogedIn,
        userId,
        setUserId,
        currentUser,
        setCurrentUser,
        token,
        setToken,
        expirationDate,
        setExpirationDate,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useGlobalAuthContext = () => {
  return useContext(AuthContext);
};

export { AuthContext, AuthProvider };
