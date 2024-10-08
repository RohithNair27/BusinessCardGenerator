import React, {useState} from 'react';
import {ConnectionsDataContext} from './ConnectionsContext';
const ConnectionsDataContextProvider = ({children}) => {
  const [peopleData, setPeopleData] = useState([]);
  const [userAdded, setUserAdded] = useState(false);
  const [termsAgreed, setTermsAgreed] = useState(false);
  const addData = (newData, isInitialRender) => {
    if (isInitialRender) {
      console.log('Initail render', newData);
      setPeopleData(newData);
    } else {
      setPeopleData(prevData => [...prevData, newData]);
      console.log('PREVdata', prevData);
    }
  };

  const isUserAdded = () => {
    setUserAdded(!userAdded);
  };

  return (
    <ConnectionsDataContext.Provider
      value={{
        peopleData,
        addData,
        userAdded,
        isUserAdded,
        termsAgreed,
        setTermsAgreed,
      }}>
      {children}
    </ConnectionsDataContext.Provider>
  );
};

export default ConnectionsDataContextProvider;

// const styles = StyleSheet.create({});
