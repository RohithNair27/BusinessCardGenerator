import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Home from '../Screens/Home';
import List from '../Screens/List';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#f2f1f6',
          elevation: 0,
          borderColor: 'transparent',
        },
        tabBarIconStyle: {display: 'none'},
        tabBarItemStyle: {alignContent: 'center', justifyContent: 'center'},
        tabBarLabelStyle: {fontSize: 14, fontWeight: '500'},
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="List" component={List} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
