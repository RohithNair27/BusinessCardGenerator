import React, {useState} from 'react';
import {ConnectionsDataContext} from './ConnectionsContext';
const ConnectionsDataContextProvider = ({children}) => {
  const [peopleData, setPeopleData] = useState([]);
  const [myData, setMyData] = useState([]);
  const [userAdded, setUserAdded] = useState(false);
  const [termsAgreed, setTermsAgreed] = useState(false);
  const addData = (newData, isInitialRender) => {
    if (isInitialRender) {
      setPeopleData(newData);
    } else {
      setPeopleData(prevData => [...prevData, newData]);
    }
  };

  function AddMyPersonalData(addedData) {
    setMyData([addedData]);
  }

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
        myData,
        AddMyPersonalData,
      }}>
      {children}
    </ConnectionsDataContext.Provider>
  );
};

export default ConnectionsDataContextProvider;

// const styles = StyleSheet.create({});
