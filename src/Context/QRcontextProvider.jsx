import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {userContext} from './QRdataContext';

const QRcontextProvider = ({children}) => {
  const [usersAdded, setUsersAdded] = useState([]);
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('+91');

  const addUsers = data => {
    setUsersAdded([...usersAdded, data]);
  };
  const selectFlag = () => {
    setShow(!show);
  };

  const changeCountryCode = country => {
    setCountryCode(country);
  };
  return (
    <userContext.Provider
      value={{
        addUsers,
        usersAdded,
        show,
        selectFlag,
        changeCountryCode,
        countryCode,
      }}>
      {children}
    </userContext.Provider>
  );
};

export default QRcontextProvider;

const styles = StyleSheet.create({});
