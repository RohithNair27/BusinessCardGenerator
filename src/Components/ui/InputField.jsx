import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

const InputField = ({placeHolder, onValueChange, value, keyProps}) => {
  return (
    <View style={styles.inputBody}>
      <TextInput
        placeholder={placeHolder}
        placeholderTextColor={'lightgray'}
        style={{color: 'black', fontWeight: '600'}}
        value={value}
        onChangeText={text => onValueChange(keyProps, text)}
      />
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  inputBody: {
    width: '100%',

    height: '100%',
    // backgroundColor: 'white',

    paddingLeft: 10,
  },
});
