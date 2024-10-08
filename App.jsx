import React, {useContext, useEffect} from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
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
