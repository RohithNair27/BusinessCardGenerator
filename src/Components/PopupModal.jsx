import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import QRcode from './ui/QRcode';
const PopupModal = ({children, visible, onPress, value, size}) => {
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.modalBody}>
        <View style={styles.closeModal}>
          <Text
            style={{
              color: 'black',
              fontSize: 30,
              width: '90%',
              fontWeight: '800',
            }}>
            QR Details
          </Text>
          <TouchableOpacity onPress={() => onPress()}>
            <Text style={styles.closeButton}>X</Text>
          </TouchableOpacity>
        </View>
        <View style={{justifyContent: 'center', flex: 1}}>
          <QRcode value={value} size={size} />
        </View>
      </View>
    </Modal>
  );
};

export default PopupModal;
const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  modalBody: {
    height: HEIGHT,

    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  closeModal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    width: '100%',
    // borderWidth: 1,
  },
  closeButton: {
    color: 'blue',
    fontSize: 30,
    fontWeight: '700',
  },
});
