import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './StackNavigation';
import ContextIndex from '../Context/ContextIndex';
import InfoModal from '../Components/ui/InfoModal';
import {CommonContext} from '../Context/commonContext/CommonContext';

const NavigationIndex = () => {
  const {showInfoModal, infoModalDisplay, infoModalDataInput, infoModalData} =
    useContext(CommonContext);
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
