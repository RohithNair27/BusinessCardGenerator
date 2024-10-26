import React, {useState} from 'react';
import {AppStateContext} from './AppStateContext';
const AppStateContextProvider = ({children}) => {
  const [snackBarDisplay, setsnackBarDisplay] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [snackBarError, setSnackBarError] = useState('Please try again');
  const [isinfoModalVisible, setInfoModalVisible] = useState({
    visible: false,
    modalType: '',
  });
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
        setInfoModalVisible,
        isinfoModalVisible,
      }}>
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateContextProvider;
