import React, {useState} from 'react';
import {userContext} from './QRdataContext';

const QRcontextProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loggedin, setLoggedin] = useState(false);
  const [loginData, setLoginData] = useState({});
  const [isSignIn, setIsSignIn] = useState(false);
  const changeLoading = value => {
    setIsLoading(value);
  };

  const changeSignIn = status => {
    setIsSignIn(status);
    console.log(isSignIn, 'signin');
  };

  return (
    <userContext.Provider
      value={{
        isLoading,
        changeLoading,
        loggedin,
        setLoggedin,
        loginData,
        setLoginData,
        isSignIn,
        changeSignIn,
        setIsSignIn,
      }}>
      {children}
    </userContext.Provider>
  );
};

export default QRcontextProvider;
