import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './StackNavigation';
import InfoModal from '../Components/ui/InfoModal';
import {AppStateContext} from '../Context/AppStateContext/AppStateContext';

const NavigationIndex = () => {
  const {showInfoModal, infoModalDisplay, infoModalDataInput, infoModalData} =
    useContext(AppStateContext);
  return (
    <>
      {infoModalDisplay ? <InfoModal /> : null}
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </>
  );
};

export default NavigationIndex;

const styles = StyleSheet.create({});
