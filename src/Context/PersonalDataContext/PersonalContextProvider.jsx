import React, {useState} from 'react';
import {PersonalDataContext} from './PersonalDataContext';
const PersonalContextProvider = ({children}) => {
  const [peopleData, setPeopleData] = useState([]);

  const addData = newData => {
    setPeopleData([...peopleData, newData]);
  };

  return (
    <PersonalDataContext.Provider value={{peopleData, addData}}>
      {children}
    </PersonalDataContext.Provider>
  );
};

export default PersonalContextProvider;

// const styles = StyleSheet.create({});
