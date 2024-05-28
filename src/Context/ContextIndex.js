import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CommonContextProvider from './commonContext/CommonContextProvider';
import QRcontextProvider from './QRcontextProvider';
import PersonalContextProvider from './PersonalDataContext/DetailsDataProvider';
const ContextIndex = ({children}) => {
  return (
    <CommonContextProvider>
      <PersonalContextProvider>
        <QRcontextProvider>{children}</QRcontextProvider>
      </PersonalContextProvider>
    </CommonContextProvider>
  );
};

export default ContextIndex;
