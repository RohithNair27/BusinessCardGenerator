import React, {useState, useContext} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {CommonContext} from '../../Context/commonContext/CommonContext';
function Snackbar({error}) {
  const {showHideSnackBar} = useContext(CommonContext);
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={true}
      onRequestClose={() => showHideSnackBar()}>
      <TouchableOpacity
        style={{flex: 1}}
        onPress={() => showHideSnackBar()}></TouchableOpacity>
      <View style={styles.centeredView}>
        <Text style={styles.errorText}>{error}</Text>
        <Pressable
          onPress={() => showHideSnackBar()}
          style={{
            ...styles.errorText,
            width: 50,

            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 16}}>Undo</Text>
        </Pressable>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    position: 'absolute',
    width: '90%',
    height: '7%',
    bottom: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5%',
    backgroundColor: '#d3302f',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  errorText: {
    color: 'white',
    fontSize: 16,

    width: '75%',
    // height: 45,
  },

  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default Snackbar;
