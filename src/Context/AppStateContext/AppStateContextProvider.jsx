import React, {useState} from 'react';
import {AppStateContext} from './AppStateContext';
const AppStateContextProvider = ({children}) => {
  const [snackBarDisplay, setsnackBarDisplay] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [snackBarError, setSnackBarError] = useState('Please try again');
  const [infoModalDisplay, setInfoModalDisplay] = useState(false);
  const [infoModalData, setInfoModalData] = useState('');

  //loading screen
  const changeLoading = value => {
    setIsLoading(value);
  };

  //snackbar
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
    <AppStateContext.Provider
      value={{
        isLoading,
        changeLoading,
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
    </AppStateContext.Provider>
  );
};

export default AppStateContextProvider;
