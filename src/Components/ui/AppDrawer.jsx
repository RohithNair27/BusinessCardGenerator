import React, {useContext, useEffect} from 'react';
import {View, Text, StyleSheet, Image, Linking, Alert} from 'react-native';
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
  const {setInfoModalVisible} = useContext(AppStateContext);
  const {loginData, loggedin} = useContext(AuthContext);
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
    setInfoModalVisible({
      visible: true,
      modalType: 'LOGOUT_MODAL',
    });
  };

  useEffect(() => {
    if (loginData && loginData.displayName) {
      console.log(loginData, 'Updated loginData');
      // Perform any actions needed with the updated login data
    }
  }, [loginData]);

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
          {loginData?.displayName || 'Loading...'}
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
          icon={() => <MaterialCommunityIcons size={24} name={'logout'} />}
          labelStyle={{color: 'black'}}
          label="Logout"
          onPress={onPressLogout}
        />
        <DrawerItem
          icon={({focused}) => (
            <MaterialCommunityIcons
              size={24}
              name={'star'}
              color={focused ? '#103550' : 'black'}
            />
          )}
          labelStyle={{color: 'black'}}
          label="Rate us"
          onPress={handlePress}
        />
      </DrawerContentScrollView>
      <View style={styles.footer}>
        <Text>Version 0.0.1</Text>
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
