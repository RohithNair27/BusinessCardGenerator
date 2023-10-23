import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {userContext} from './QRdataContext';
const QRcontextProvider = ({children}) => {
  const [usersAdded, setUsersAdded] = useState([]);

  const addUsers = data => {
    // console.log(data);
    setUsersAdded([...usersAdded, data]);
    // setUsersAdded([...usersAdded, data]);
    console.log(usersAdded);
  };
  return (
    <userContext.Provider value={{addUsers, usersAdded}}>
      {children}
    </userContext.Provider>
  );
};

export default QRcontextProvider;

const styles = StyleSheet.create({});
