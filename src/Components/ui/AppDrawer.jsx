import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

const AppDrawerItem = props => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
        <Text style={styles.drawerHeaderText}>BizCard</Text>
        <Text style={styles.drawerHeaderText}>Tuesday</Text>
        <Text style={styles.drawerHeaderText}>12:30 AM</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerHeader: {
    height: 150,
    // backgroundColor: '#103550',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  drawerHeaderText: {
    // color: '#fff',
    color: '#103550',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AppDrawerItem;
