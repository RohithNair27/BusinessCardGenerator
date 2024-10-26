import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import Button from './Button';
import {AppStateContext} from '../../Context/AppStateContext/AppStateContext';
import Plane from '../../Assets/Images/plane.svg';
import {logoutPress} from '../../Firebase/FirebaseAuth';
import {AuthContext} from '../../Context/AuthContext/AuthContext';
const InfoModal = () => {
  const {showInfoModal, isinfoModalVisible, setInfoModalVisible} =
    useContext(AppStateContext);
  const {loggedin, setLoggedin, loginData, setLoginData} =
    useContext(AuthContext);

  const [next, setNext] = useState(true);

  const onPressLogOut = () => {
    setLoginData({});
    handleInfoModal();
    setLoggedin(false);
    logoutPress();
  };

  const onPressPressDiveIn = () => {
    setInfoModalVisible({
      visible: false,
      modalType: '',
    });
  };

  const WelcomeModal = () => {
    return (
      <TouchableOpacity style={styles.centeredView} activeOpacity={1}>
        <StatusBar backgroundColor={'rgba(0, 0, 0, 0.5)'} />
        <View style={styles.infoView}>
          {next ? (
            <>
              <Text style={styles.headerText}>Welcome! 🎉</Text>
              <Text style={[styles.subtext, {paddingVertical: 10}]}>
                In today's digital world, meaningful professional connections
                drive success. Our app replaces traditional business cards,
                letting you instantly share and manage contact information,
                making networking seamless and environmentally friendly while
                keeping your professional network organized and accessible
                anywhere.
              </Text>
              <View
                style={[styles.buttonContainer, {justifyContent: 'center'}]}>
                <Button
                  placeHolder={'Next'}
                  backgroundColor={'#FF7377'}
                  width={'45%'}
                  height={'100%'}
                  textColor={'#fff'}
                  onPress={() => {
                    setNext(false);
                  }}
                />
              </View>
            </>
          ) : (
            <>
              <Text style={styles.headerText}>Let's start 🪪</Text>
              <Text style={[styles.subtext, {paddingVertical: 10}]}>
                Create your own ID card that can be used to share your data with
                others
              </Text>
              <View
                style={[styles.buttonContainer, {justifyContent: 'center'}]}>
                <Button
                  placeHolder={'Dive in'}
                  backgroundColor={'#FF7377'}
                  width={'45%'}
                  height={'100%'}
                  textColor={'#fff'}
                  onPress={() => {
                    onPressPressDiveIn();
                  }}
                />
              </View>
            </>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  const handleInfoModal = () => {
    setInfoModalVisible({
      visible: false,
      modalType: '',
    });
  };

  const LogOutModal = () => {
    return (
      <TouchableOpacity
        style={styles.centeredView}
        activeOpacity={1}
        onPress={() => handleInfoModal()}>
        <View style={styles.infoView}>
          <Plane style={styles.planeIcon} />
          <Text style={styles.headerText}>Log Out? 🥹</Text>
          <Text style={styles.subtext}>You will lose all the data</Text>
          <View style={styles.buttonContainer}>
            <Button
              placeHolder={'Cancel'}
              textColor={'#FF7377'}
              width={'45%'}
              height={'100%'}
              onPress={() => handleInfoModal()}
            />
            <Button
              placeHolder={'Log out'}
              backgroundColor={'#FF7377'}
              width={'45%'}
              height={'100%'}
              textColor={'#fff'}
              onPress={() => {
                onPressLogOut();
              }}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  function onShowModal() {
    switch (isinfoModalVisible.modalType) {
      case 'WELCOME_MODAL':
        return <WelcomeModal />;
      case 'LOGOUT_MODAL':
        return <LogOutModal />;
    }
  }
  useEffect(() => {
    console.log('changed');
    onShowModal();
  }, [isinfoModalVisible]);
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={true}
      useNativeDriver={true}>
      <StatusBar backgroundColor={'rgba(0, 0, 0, 0.5)'} />
      {onShowModal()}
    </Modal>
  );
};

export default InfoModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  infoView: {
    backgroundColor: 'white',

    width: '80%',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    // justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
    transform: [{scale: 0.9}],
    opacity: 0.9,
    animation: {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    },
  },

  headerText: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    color: '#FF7377',
  },
  subtext: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 50,
  },
});
