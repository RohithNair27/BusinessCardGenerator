import React, {useCallback} from 'react';
import {View, Text, StyleSheet, Image, Linking} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Profile from '../../Assets/Images/profile_drawer.svg';
import QRModal from '../QRModal';
const AppDrawerItem = props => {
  const supportedURL = 'http://play.google.com/store';
  const handlePress = async () => {
    const supported = await Linking.canOpenURL(supportedURL);
    if (supported) {
      await Linking.openURL(supportedURL);
    } else {
      Alert.alert(`Don't know how to open this URL: ${supportedURL}`);
    }
  };

  return (
    <>
      <View style={styles.drawerHeader}>
        <Profile />
        <Text style={styles.drawerHeaderText}>Rohtih K Nair</Text>
        <Text
          style={{
            ...styles.drawerHeaderText,
            fontSize: 12,
            color: '#777777',
            fontWeight: 'normal',
          }}>
          Rohithnair@gmail.com
        </Text>
      </View>
      <DrawerContentScrollView>
        <DrawerItemList {...props} />

        <DrawerItem
          icon={() => {
            return <MaterialCommunityIcons size={24} name={'logout'} />;
          }}
          label="Logout"
          onPress={() => console.log('FIRE CUSTOM LOGOUT FUNCTION')}
        />
        <DrawerItem
          icon={() => {
            return <MaterialCommunityIcons size={24} name={'star'} />;
          }}
          label="Rate us"
          onPress={() => handlePress()}
        />
      </DrawerContentScrollView>
      <View style={styles.footer}>
        <Text>Version 0.0.1</Text>
        {/* <Text></Text> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  drawerHeader: {
    paddingLeft: 10,
    height: 150,
    justifyContent: 'center',
  },
  drawerHeaderText: {
    color: '#103550',

    fontSize: 20,
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
  },
});

export default AppDrawerItem;
