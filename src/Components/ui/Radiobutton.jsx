import {
  StyleSheet,
  Text,
  View,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

const Radiobutton = ({terms, onClick}) => {
  return (
    <TouchableOpacity
      style={styles.radioButtonContainer}
      onPress={() => onClick()}>
      <View
        style={[styles.radioButton, terms ? styles.selectedRadioButton : null]}
      />
      <Text>
        Agree to terms and conditions? <Text style={{color: 'red'}}>***</Text>
      </Text>
    </TouchableOpacity>
  );
};

export default Radiobutton;

const styles = StyleSheet.create({
  radioButtonContainer: {
    marginTop: 10,
    // borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    justifyContent: 'center',
  },
  radioButton: {
    width: 30,
    height: 30,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'gray',
    marginRight: 10,
  },
  selectedRadioButton: {
    backgroundColor: 'lightgreen',
    borderWidth: 0,
  },
});
