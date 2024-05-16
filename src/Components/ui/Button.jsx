import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({
  placeHolder,
  bordercolor,
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
        borderColor: bordercolor,
        borderWidth: bordercolor ? 1 : 0,
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
    borderRadius: 10,

    bordercolor: 'none',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    // color: 'white',
    fontWeight: '500',
    fontSize: 20,
  },
});
