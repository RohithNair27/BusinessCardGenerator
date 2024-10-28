import React, {useState, useContext} from 'react';
import InitialScreen from '../Screens/Initial';
import TabNavigator from './TabNavigation';
import SignupPage from '../Screens/Signup';
import LoginPage from '../Screens/LoginPage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {checkLoginStatus} from '../Firebase/FirebaseAuth';
import AppDrawer from './DrawerNavigation';
import {AuthContext} from '../Context/AuthContext/AuthContext';
function StackNavigation() {
  const Stack = createNativeStackNavigator();
  const {loggedin, setLoggedin, loginData, setLoginData} =
    useContext(AuthContext);

  //checking if user is logged in on load
  const onLoad = async () => {
    try {
      const data = await checkLoginStatus();
      if (data !== null) {
        console.log(data);
        setLoginData(data);
        setLoggedin(true);
      } else {
        setLoggedin(false);
      }
    } catch (error) {
      setLoggedin(false);
    }
  };

  React.useEffect(() => {
    onLoad();
  }, []);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {loggedin ? (
        <Stack.Group>
          <Stack.Screen name="drawerNavigation" component={AppDrawer} />
        </Stack.Group>
      ) : (
        <Stack.Group>
          <Stack.Screen name="InitialScreen" component={InitialScreen} />
          <Stack.Screen name="SignupPage" component={SignupPage} />
          <Stack.Screen name="LoginPage" component={LoginPage} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
}
export default StackNavigation;
