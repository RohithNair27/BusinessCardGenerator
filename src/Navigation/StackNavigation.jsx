import React, {useState} from 'react';
import InitialScreen from '../Screens/Initial';
import TabNavigator from './TabNavigation';
import SignupPage from '../Screens/Signup';
import LoginPage from '../Screens/LoginPage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {checkLoginStatus} from '../Firebase/FirebaseAuth';
function StackNavigation() {
  const Stack = createNativeStackNavigator();
  const [loggedin, setLoggedin] = useState(false);
  const onLoad = async () => {
    try {
      const data = await checkLoginStatus();
      setLoggedin(true);
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
      {false ? (
        <Stack.Screen name="Tab" component={TabNavigator} />
      ) : (
        <>
          <Stack.Screen name="InitialScreen" component={InitialScreen} />
          <Stack.Screen name="SignupPage" component={SignupPage} />
          <Stack.Screen name="LoginPage" component={LoginPage} />
        </>
      )}
    </Stack.Navigator>
  );
}
export default StackNavigation;
