import React, {useState, useContext} from 'react';
import InitialScreen from '../Screens/Initial';
import TabNavigator from './TabNavigation';
import SignupPage from '../Screens/Signup';
import LoginPage from '../Screens/LoginPage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {checkLoginStatus} from '../Firebase/FirebaseAuth';
import {userContext} from '../Context/QRdataContext';
import AppDrawer from './DrawerNavigation';
import InfoModal from '../Components/ui/InfoModal';
function StackNavigation() {
  const Stack = createNativeStackNavigator();
  const {loggedin, setLoggedin, loginData, setLoginData} =
    useContext(userContext);
  const onLoad = async () => {
    try {
      const data = await checkLoginStatus();
      console.log(data);
      setLoginData(data);
      if (data.uid) {
        setLoggedin(true);
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
