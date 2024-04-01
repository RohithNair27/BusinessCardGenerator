import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useContext} from 'react';
import {userContext} from '../../Context/QRdataContext';

const InputField = ({
  placeHolder,
  onValueChange,
  value,
  keyProps,
  keyBoardType,
  maxLength,
  width,
  height,
  placeholderAbove,
}) => {
  return (
    <View style={{...styles.inputBody, width: width, height: height}}>
      <Text style={{marginBottom: '1%', paddingLeft: '2%'}}>
        {placeholderAbove}
      </Text>
      <TextInput
        placeholder={placeHolder}
        placeholderTextColor={'lightgray'}
        style={styles.inputText}
        // value={value}
        // onChangeText={text => onValueChange(keyProps, text)}
        inputMode={keyBoardType}
        maxLength={maxLength}
      />
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  inputBody: {
    width: '100%',
    alignItems: 'center',
    height: '8%',
    paddingleft: '10px',
    alignItems: 'flex-start',
  },
  inputText: {
    // borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
    width: '100%',
    height: '90%',
    color: 'black',
    paddingLeft: '4%',
  },
});
