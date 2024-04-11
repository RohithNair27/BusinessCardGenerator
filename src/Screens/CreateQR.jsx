import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import InputField from '../Components/ui/InputField';
const CreateQR = () => {
  const [personData, setPersonData] = useState({
    name: {title: 'Name', value: ''},
    number: {
      title: '74104 10123',
      value: '',
      keyBoardType: 'tel',
      maxLength: 10,
    },
    company_name: {title: 'Company Name', value: ''},
    Email: {title: 'Email', value: '', keyBoardType: 'email'},
    website: {title: 'Website', value: ''},
    city: {title: 'City', value: ''},
  });

  return (
    <View style={styles.body}>
      <Text style={styles.HeadingText}>Kindly enter the data you want to</Text>
      <Text style={{...styles.HeadingText, color: '#636EAB'}}>share!</Text>
      <Text>CreateQR</Text>
      <View style={styles.inputBody}>
        {Object.keys(personData).map(keys => {
          return (
            <View key={keys} style={styles.eachInput}>
              <InputField
                keyProps={keys}
                placeHolder={personData[keys].title}
                value={personData[keys].value}
                // onValueChange={handleInputChange}
                keyBoardType={personData[keys].keyBoardType}
              />
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default CreateQR;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#DBE9FF',
    alignItems: 'center',
    // justifyContent: 'center',
    padding: '6%',
  },
  HeadingText: {
    fontSize: 35,
    fontWeight: '700',
    fontFamily: 'DM Sans',
    textAlign: 'center',
  },
  inputBody: {
    width: '85  %',
    height: '75%',
    borderWidth: 1,
  },
});
