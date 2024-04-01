import * as React from 'react';
import InitialScreen from '../Screens/Initial';
import TabNavigator from './TabNavigation';
import SignupPage from '../Screens/Signup';
import LoginPage from '../Screens/LoginPage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
function StackNavigation() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="InitialScreen" component={InitialScreen} />
      <Stack.Screen name="Tab" component={TabNavigator} />
      <Stack.Screen name="SignupPage" component={SignupPage} />
      <Stack.Screen name="LoginPage" component={LoginPage} />
    </Stack.Navigator>
  );
}
export default StackNavigation;
