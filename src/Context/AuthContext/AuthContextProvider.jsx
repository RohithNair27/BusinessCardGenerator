import React, {useState} from 'react';
import {AuthContext} from './AuthContext';
const AuthContextProvider = ({children}) => {
  const [loggedin, setLoggedin] = useState(false);
  const [loginData, setLoginData] = useState({});
  const [isSignIn, setIsSignIn] = useState(false);

  const changeSignIn = status => {
    setIsSignIn(status);
  };

  return (
    <AuthContext.Provider
      value={{
        loggedin,
        setLoggedin,
        loginData,
        setLoginData,
        isSignIn,
        changeSignIn,
        setIsSignIn,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
