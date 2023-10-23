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
    marginVertical: '2%',

    // borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: 'lightgray',
    height: '8%',
    paddingLeft: 10,
  },
});
