import React, {useState} from 'react';
import {userContext} from './QRdataContext';

const QRcontextProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const changeLoading = value => {
    setIsLoading(value);
  };

  return (
    <userContext.Provider
      value={{
        isLoading,
        changeLoading,
      }}>
      {children}
    </userContext.Provider>
  );
};

export default QRcontextProvider;
