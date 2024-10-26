import React, {useState} from 'react';
import {AuthContext} from './AuthContext';
const AuthContextProvider = ({children}) => {
  const [loggedin, setLoggedin] = useState(false);
  const [loginData, setLoginData] = useState({});
  const [isFirstTimeUser, setFirstTimeUser] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        loggedin,
        setLoggedin,
        loginData,
        setLoginData,
        isFirstTimeUser,
        setFirstTimeUser,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
