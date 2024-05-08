import React, {useContext, useEffect} from 'react';
import Home from './src/Screens/Home';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/Navigation/StackNavigation';
import CommonContextProvider from './src/Context/commonContext/CommonContextProvider';
import QRcontextProvider from './src/Context/QRcontextProvider';
function App() {
  return (
    <CommonContextProvider>
      <QRcontextProvider>
        <StatusBar backgroundColor={'#DBE9FF'} />
        <SafeAreaView style={styles.body}>
          <NavigationContainer>
            <StackNavigation />
          </NavigationContainer>
        </SafeAreaView>
      </QRcontextProvider>
    </CommonContextProvider>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#DBE9FF',
  },
});

export default App;
