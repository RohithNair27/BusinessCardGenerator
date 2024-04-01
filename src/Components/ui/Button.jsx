import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({
  placeHolder,
  borderColor,
  onPress,
  backgroundColor,
  textColor,
  width,
  height,
}) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.body,
        backgroundColor: backgroundColor,
        width: width,
        height: height,
      }}
      onPress={() => onPress()}>
      <Text style={{...styles.text, color: textColor}}>{placeHolder}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  body: {
    // borderWidth: 1,
    width: '85%',
    height: '7%',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    // color: 'white',
    fontWeight: '500',
    fontSize: 20,
  },
});
