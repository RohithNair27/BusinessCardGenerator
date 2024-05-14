import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useContext, useState} from 'react';

import Entypo from 'react-native-vector-icons/Entypo';
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
  secureTextEntry,
  borderColor,
  compulsory,
}) => {
  const [visiblePassword, setVisiblePassword] = useState(true);
  const passwordVisible = () => {
    setVisiblePassword(!visiblePassword);
  };
  return (
    <View
      style={{
        ...styles.inputBody,
        width: width,
        height: height,
      }}>
      <Text style={{marginBottom: '1%', paddingLeft: '2%'}}>
        {placeholderAbove}
        {placeholderAbove !== 'Enter your website' ? (
          <Text style={{color: 'red', paddingLeft: 10}}>*</Text>
        ) : null}
      </Text>
      <TextInput
        placeholder={placeHolder}
        placeholderTextColor={'lightgray'}
        style={{
          ...styles.inputText,
        }}
        value={value}
        onChangeText={text => onValueChange(keyProps, text)}
        inputMode={keyBoardType}
        maxLength={maxLength}
        secureTextEntry={secureTextEntry === visiblePassword}
      />
      {secureTextEntry ? (
        <TouchableOpacity
          style={styles.icons}
          onPress={() => passwordVisible()}>
          {visiblePassword ? (
            <Entypo name="eye-with-line" size={30} color="#000" />
          ) : (
            <Entypo name="eye" size={30} color="#000" />
          )}
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  inputBody: {
    width: '100%',
    // alignItems: 'center',
    paddingleft: '10px',
    alignItems: 'flex-start',
  },
  inputText: {
    // borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'white',
    width: '100%',
    // height: '90%',
    color: 'black',
    paddingLeft: '4%',
  },
  icons: {
    position: 'absolute',
    left: '85%',
    top: '50%',
    opacity: '0.9',
  },
});
