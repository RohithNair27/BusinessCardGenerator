import {
  StyleSheet,
  Text,
  View,
  Modal,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React, {useContext} from 'react';
import QRcode from './ui/QRcode';
import Button from './ui/Button';
import {useIsFocused} from '@react-navigation/native';
import {storeDataLocally} from '../Utils/AsyncStorage';
const QRModal = ({onClick, data}) => {
  const isFocused = useIsFocused();

  const sendDataToLocal = () => {
    //using number as the key in async storage
    let key = data.number;
    storeDataLocally(key, data);
  };
  return (
    <Modal animationType="slide" transparent={true} visible={true}>
      {isFocused ? (
        <StatusBar backgroundColor={'rgba(52, 52, 52, 0.8)'} />
      ) : null}

      <TouchableOpacity style={styles.centeredView} onPress={() => onClick()}>
        <View style={styles.qrview}>
          <View style={{alignItems: 'center', width: '80%'}}>
            <QRcode size={170} peronsalInfo={data} />
            <Text
              style={{
                fontSize: 15,
                fontWeight: '400',
                marginTop: 10,
                textAlign: 'center',
              }}>
              Position this QR code in the frame of another device to share data
            </Text>
          </View>
          <Button
            placeHolder={'Save'}
            backgroundColor={'#636EAB'}
            width={'70%'}
            height={'13%'}
            textColor={'#fff'}
            onPress={() => sendDataToLocal(data)}
          />
        </View>
      </TouchableOpacity>
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
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  qrview: {
    position: 'absolute',
    bottom: -10,
    borderRadius: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '90%',
    height: '50%',
  },
});
