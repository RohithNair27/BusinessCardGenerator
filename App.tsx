import React from 'react';
import type {PropsWithChildren} from 'react';
import Home from './src/Screens/Home';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './src/Navigation/TabNavigation';
import QRcontextProvider from './src/Context/QRcontextProvider';
function App(): JSX.Element {
  return (
    <QRcontextProvider>
      <SafeAreaView style={styles.body}>
        <StatusBar backgroundColor={'#ffe9ec'} />
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </QRcontextProvider>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});

export default App;
