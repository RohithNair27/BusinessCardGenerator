import React, {useContext} from 'react';
import Home from '../Screens/Home';
import VisionCamera from '../Screens/VisionCamera';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CreateQR from '../Screens/CreateQR';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../Context/AuthContext/AuthContext';
const TabNavigator = () => {
  //isSignIn,changeSignIn,
  const {isSignIn, changeSignIn} = useContext(AuthContext);
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName={isSignIn ? 'New_Card' : 'Home'}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          // backgroundColor: '#103550',
          backgroundColor: '#DBE9FF',
          elevation: 5,
          height: '8%',
        },

        tabBarLabelStyle: {fontSize: 14, fontWeight: '500'},
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="home-outline"
              size={26}
              color={focused ? '#103550' : 'gray'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="New_Card"
        component={CreateQR}
        initialParams={{addSelfData: false}}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="id-card-outline"
              size={26}
              color={focused ? '#103550' : 'gray'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Scan"
        component={VisionCamera}
        initialParams={{mode: false}}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="scan-sharp"
              size={26}
              color={focused ? '#103550' : 'gray'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
