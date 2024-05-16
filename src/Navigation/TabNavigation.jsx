import React, {useContext} from 'react';
import Home from '../Screens/Home';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CreateQR from '../Screens/CreateQR';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CameraQR from '../Screens/camera';
const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
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
              size={20}
              color={focused ? '#103550' : 'gray'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="New Card"
        component={CreateQR}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="id-card-outline"
              size={20}
              color={focused ? '#103550' : 'gray'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Scan"
        component={CameraQR}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="scan-sharp"
              size={20}
              color={focused ? '#103550' : 'gray'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
