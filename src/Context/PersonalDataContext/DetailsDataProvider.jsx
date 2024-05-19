import React, {useState} from 'react';
import {PersonalDataContext} from './DetailsDataContext';
const PersonalContextProvider = ({children}) => {
  const [peopleData, setPeopleData] = useState([]);
  const [userAdded, setUserAdded] = useState(false);
  const [termsAgreed, setTermsAgreed] = useState(false);
  const addData = newData => {
    // console.log('newData');
    setPeopleData(prevData => [...prevData, ...newData]);
  };

  const isUserAdded = () => {
    setUserAdded(!userAdded);
  };

  return (
    <PersonalDataContext.Provider
      value={{
        peopleData,
        addData,
        userAdded,
        isUserAdded,
        termsAgreed,
        setTermsAgreed,
      }}>
      {children}
    </PersonalDataContext.Provider>
  );
};

export default PersonalContextProvider;

// const styles = StyleSheet.create({});
