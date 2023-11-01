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
    <SafeAreaView style={styles.body}>
      <StatusBar backgroundColor={'#f2f1f6'} />
      <QRcontextProvider>
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </QRcontextProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});

export default App;
