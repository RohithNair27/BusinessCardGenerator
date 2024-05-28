import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {CommonContext} from './CommonContext';
const CommonContextProvider = ({children}) => {
  const [snackBarDisplay, setsnackBarDisplay] = useState(false);
  const [snackBarError, setSnackBarError] = useState('Please try again');
  const [infoModalDisplay, setInfoModalDisplay] = useState(false);
  const [infoModalData, setInfoModalData] = useState('');
  const showHideSnackBar = () => {
    setsnackBarDisplay(!snackBarDisplay);

    if (!!snackBarDisplay) {
      changeErrorMessage();
    }
  };

  const changeErrorMessage = message => {
    setSnackBarError(message);
  };

  const showInfoModal = () => {
    setInfoModalDisplay(!infoModalDisplay);
  };

  function infoModalDataInput(data) {
    setInfoModalData(data);
  }

  return (
    <CommonContext.Provider
      value={{
        snackBarDisplay,
        showHideSnackBar,
        snackBarError,
        changeErrorMessage,
        showInfoModal,
        infoModalDisplay,
        infoModalDataInput,
        infoModalData,
      }}>
      {children}
    </CommonContext.Provider>
  );
};

export default CommonContextProvider;

const styles = StyleSheet.create({});
