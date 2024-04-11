import React, {useContext, useEffect} from 'react';
// import type {PropsWithChildren} from 'react';
import Home from './src/Screens/Home';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/Navigation/StackNavigation';
import QRcontextProvider from './src/Context/QRcontextProvider';
function App() {
  return (
    <QRcontextProvider>
      <StatusBar backgroundColor={'#DBE9FF'} />
      <SafeAreaView style={styles.body}>
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </SafeAreaView>
    </QRcontextProvider>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#DBE9FF',
  },
});

export default App;
