import React from 'react';
import AppStateContextProvider from './AppStateContext/AppStateContextProvider';
import AuthContextProvider from './AuthContext/AuthContextProvider';
import ConnectionsDataContextProvider from './ConnectionsContext/ConnectionsContextProvider';
const ContextIndex = ({children}) => {
  return (
    <AppStateContextProvider>
      <AuthContextProvider>
        <ConnectionsDataContextProvider>
          {children}
        </ConnectionsDataContextProvider>
      </AuthContextProvider>
    </AppStateContextProvider>
  );
};

export default ContextIndex;
