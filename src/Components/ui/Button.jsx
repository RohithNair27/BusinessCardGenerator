import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({placeHolder, width, backGroundColor, onPress}) => {
  return (
    <TouchableOpacity
      style={{...styles.body, width: width, backgroundColor: backGroundColor}}
      onPress={() => onPress()}>
      <Text style={styles.text}>{placeHolder}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  body: {
    // borderWidth: 1,
    width: '100%',
    height: '20%',
    backgroundColor: '#007afe',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontWeight: '600',
  },
});
