import React, {useState} from 'react';
import {userContext} from './QRdataContext';

const QRcontextProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loggedin, setLoggedin] = useState(false);
  const [loginData, setLoginData] = useState({});
  const changeLoading = value => {
    setIsLoading(value);
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
      }}>
      {children}
    </userContext.Provider>
  );
};

export default QRcontextProvider;
