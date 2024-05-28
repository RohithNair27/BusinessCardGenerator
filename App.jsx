import React, {useContext, useEffect} from 'react';
import Home from './src/Screens/Home';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import CommonContextProvider from './src/Context/commonContext/CommonContextProvider';
import ContextIndex from './src/Context/ContextIndex';
import NavigationIndex from './src/Navigation/NavigationIndex';
function App() {
  return (
    <ContextIndex>
      <SafeAreaView style={styles.body}>
        <NavigationIndex />
      </SafeAreaView>
    </ContextIndex>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#DBE9FF',
  },
});

export default App;
