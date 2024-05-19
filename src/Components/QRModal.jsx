import {
  StyleSheet,
  Text,
  View,
  Modal,
  StatusBar,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React, {useContext} from 'react';
import {useIsFocused} from '@react-navigation/native';
import {storeDataLocally} from '../Utils/AsyncStorage';
import Profile_image from '../Assets/Images/profile_drawer.svg';
import Ionicons from 'react-native-vector-icons/Ionicons';
import QRcode from './ui/QRcode';

const QRModal = ({onClick, data, status}) => {
  const isFocused = useIsFocused();

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={status}
      useNativeDriver={true}
      onRequestClose={onClick}>
      {isFocused ? (
        <StatusBar backgroundColor={'rgba(52, 52, 52, 0.8)'} />
      ) : null}

      <View style={styles.centeredView}>
        <View style={styles.qrview}>
          <View style={styles.closeQr}>
            <Text
              style={{fontWeight: 'bold', fontSize: 20}}
              onPress={() => onClick()}>
              X
            </Text>
          </View>
          <View style={styles.idCard}>
            <View style={styles.header}>
              <Text style={{fontWeight: 'bold', fontSize: 30, color: 'white'}}>
                Bizz ID card
              </Text>
            </View>
            <View style={styles.body}>
              <View style={styles.textContainer}>
                <Text style={styles.name}>Rohith Nair</Text>
                {/* <Text style={styles.value}>Software developer</Text> */}
                <View style={styles.idContainer}>
                  <Text style={styles.label}>Company name</Text>
                  <Text style={styles.value}>Capgemini</Text>
                </View>
                <View style={styles.idContainer}>
                  <Text style={styles.label}>Connected on</Text>
                  <Text style={styles.value}>19th May 2020</Text>
                </View>

                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity
                    onPress={() => Linking.openURL(`tel:${93902000}`)}>
                    <Ionicons
                      name="call"
                      size={30}
                      color={'black'}
                      // style={{marginLeft: 10}}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() =>
                      Linking.openURL('mailto:support@example.com')
                    }>
                    <Ionicons
                      name="mail"
                      size={30}
                      color={'black'}
                      style={{marginLeft: 10}}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <Profile_image />
            </View>
            <View style={styles.footer}>
              <QRcode size={90} peronsalInfo={data} />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default QRModal;

const styles = StyleSheet.create({
  centeredView: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  qrview: {
    position: 'absolute',
    borderRadius: 30,
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',
    height: '85%',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeQr: {
    position: 'absolute',
    top: 20,
    right: 20,
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'lightgray',
  },
  header: {
    flex: 0.3,
    width: '100%',
    backgroundColor: '#103550',
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 1.5,
    // borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#DBE9FF',
  },
  idCard: {
    // borderWidth: 1,
    width: '80%',
    height: '70%',
    borderRadius: 10,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  textContainer: {
    // borderWidth: 1,
    height: '100%',
    width: '60%',
    justifyContent: 'space-evenly',
  },
  idContainer: {
    // flexDirection: 'row',
    // alignItems: 'center',
  },
  label: {
    marginRight: 8,
    fontWeight: 'bold',
  },

  footer: {
    width: '100%',
    // borderWidth: 1,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#103550',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});
