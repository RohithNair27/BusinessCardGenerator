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
}) => {
  const {show, selectFlag, changeCountryCode, countryCode} =
    useContext(userContext);
  return (
    <View style={styles.inputBody}>
      <TouchableOpacity onPress={() => selectFlag()}>
        {keyBoardType === 'tel' ? (
          <Text style={{color: 'black', fontWeight: '600'}}>{countryCode}</Text>
        ) : null}
      </TouchableOpacity>
      <TextInput
        placeholder={placeHolder}
        placeholderTextColor={'lightgray'}
        style={{color: 'black', fontWeight: '400'}}
        value={value}
        onChangeText={text => onValueChange(keyProps, text)}
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
    height: '100%',
    // backgroundColor: 'white',
    flexDirection: 'row',

    paddingLeft: 10,
  },
});
