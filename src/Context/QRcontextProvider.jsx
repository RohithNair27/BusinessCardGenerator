import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {userContext} from './QRdataContext';
const QRcontextProvider = ({children}) => {
  const [usersAdded, setUsersAdded] = useState([]);

  const addUsers = data => {
    setUsersAdded([...usersAdded, data]);
  };
  return (
    <userContext.Provider value={{addUsers, usersAdded}}>
      {children}
    </userContext.Provider>
  );
};

export default QRcontextProvider;

const styles = StyleSheet.create({});
