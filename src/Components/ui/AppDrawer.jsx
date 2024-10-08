import React, {useContext, useEffect} from 'react';
import {View, Text, StyleSheet, Image, Linking} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Profile from '../../Assets/Images/profile_drawer.svg';
import {getMobilePermission} from '../../Utils/Camera';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {AppStateContext} from '../../Context/AppStateContext/AppStateContext';
import {AuthContext} from '../../Context/AuthContext/AuthContext';
const AppDrawerItem = props => {
  const {showInfoModal, infoModalDataInput} = useContext(AppStateContext);
  const {loginData} = useContext(AuthContext);
  const supportedURL = 'http://play.google.com/store';
  const handlePress = async () => {
    const supported = await Linking.canOpenURL(supportedURL);
    if (supported) {
      await Linking.openURL(supportedURL);
    } else {
      Alert.alert(`Don't know how to open this URL: ${supportedURL}`);
    }
  };

  const onPressLogout = () => {
    showInfoModal();
    infoModalDataInput('LOGOUT');
  };

  return (
    <>
      <View style={styles.drawerHeader}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            borderColor: '#103550',
            alignItems: 'center',
            marginBottom: 10,
          }}
          onPress={() => {
            getMobilePermission('launchImage');
          }}>
          <Profile />

          <View style={styles.editbutton}>
            <MaterialIcons size={25} name={'edit'} color={'white'} />
          </View>
        </TouchableOpacity>
        <Text style={styles.drawerHeaderText}>
          {loginData ? loginData?.displayName : 'Loading...'}
        </Text>
        <Text
          style={{
            ...styles.drawerHeaderText,
            fontSize: 12,
            color: '#777777',
            fontWeight: 'normal',
          }}>
          {loginData?.email}
        </Text>
      </View>
      <DrawerContentScrollView>
        <DrawerItemList {...props} />
        <DrawerItem
          icon={() => {
            return <MaterialCommunityIcons size={24} name={'logout'} />;
          }}
          labelStyle={{color: 'black'}}
          label="Logout"
          onPress={() => onPressLogout()}
        />
        <DrawerItem
          icon={({focused, color}) => {
            return (
              <MaterialCommunityIcons
                size={24}
                name={'star'}
                color={focused ? '#103550' : 'black'}
              />
            );
          }}
          labelStyle={{color: 'black'}}
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
    height: 170,
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawerHeaderText: {
    color: '#103550',

    fontSize: 20,
    fontWeight: 'bold',
  },
  editbutton: {
    position: 'absolute',
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '40%',
    height: '40%',
    bottom: 0,
    right: 0,
    borderRadius: 50,
    backgroundColor: 'rgba(0, 0, 0, .5)',
  },
  footer: {
    borderColor: 'lightgray',
    position: 'absolute',

    bottom: 10,
    alignSelf: 'center',
  },
});

export default AppDrawerItem;
