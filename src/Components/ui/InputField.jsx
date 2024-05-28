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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
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
  compulsory,
  icon,
  paddingLeft,
}) => {
  const [visiblePassword, setVisiblePassword] = useState(true);
  const passwordVisible = () => {
    setVisiblePassword(!visiblePassword);
  };

  const IconDisplay = () => {
    return (
      <TouchableOpacity style={styles.icons} onPress={() => passwordVisible()}>
        {visiblePassword ? (
          <Entypo name="eye-with-line" size={30} color="#000" />
        ) : (
          <Entypo name="eye" size={30} color="#000" />
        )}
      </TouchableOpacity>
    );
  };
  return (
    <>
      {placeholderAbove ? (
        <Text
          style={{
            marginBottom: '1%',
            paddingLeft: '2%',
          }}>
          {compulsory ? <Text style={{color: 'red'}}>*</Text> : null}
          {placeholderAbove}
        </Text>
      ) : null}
      <View
        style={{
          ...styles.inputBody,
          width: width,
          height: height,
          paddingLeft: paddingLeft,
        }}>
        <TextInput
          placeholder={placeHolder}
          placeholderTextColor={'lightgray'}
          style={styles.inputText}
          value={value}
          onChangeText={text => onValueChange(keyProps, text)}
          inputMode={keyBoardType}
          maxLength={maxLength}
          secureTextEntry={secureTextEntry === visiblePassword}
        />
        {icon === 'search' ? (
          <TouchableOpacity>
            <FontAwesome5
              name="search"
              size={25}
              color="lightgray"
              style={styles.icons}
            />
          </TouchableOpacity>
        ) : null}
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
    </>
  );
};

export default InputField;

const styles = StyleSheet.create({
  inputBody: {
    width: '80%',
    height: '40%',
    paddingleft: '10px',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    backgroundColor: 'white',
    paddingLeft: '5%',
    borderRadius: 10,
  },
  inputText: {
    width: '100%',
    color: 'black',
  },
  icons: {
    position: 'relative',
    right: 20,
  },
});
