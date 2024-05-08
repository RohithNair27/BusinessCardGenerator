import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {CommonContext} from './CommonContext';
const CommonContextProvider = ({children}) => {
  const [snackBarDisplay, setsnackBarDisplay] = useState(false);
  const [snackBarError, setSnackBarError] = useState('Please try again');
  const showHideSnackBar = () => {
    setsnackBarDisplay(!snackBarDisplay);
    if (!!snackBarDisplay) {
      changeErrorMessage();
    }
  };

  const changeErrorMessage = message => {
    setSnackBarError(message);
  };

  return (
    <CommonContext.Provider
      value={{
        snackBarDisplay,
        showHideSnackBar,
        snackBarError,
        changeErrorMessage,
      }}>
      {children}
    </CommonContext.Provider>
  );
};

export default CommonContextProvider;

const styles = StyleSheet.create({});
