import {StyleSheet, Text, View, StatusBar, ScrollView} from 'react-native';
import React, {useEffect, useState, useContext} from 'react';
import InputField from '../Components/ui/InputField';
import Button from '../Components/ui/Button';
import {useIsFocused} from '@react-navigation/native';
import QRcode from '../Components/ui/QRcode';
import QRModal from '../Components/QRModal';
import Snackbar from '../Components/ui/Snackbar';
import {CommonContext} from '../Context/commonContext/CommonContext';
import {
  EmailValidation,
  isEmptyString,
  isPersonalWebsite,
  isValidPhoneNumber,
} from '../Utils/validation';
const CreateQR = () => {
  const {showHideSnackBar, changeErrorMessage, snackBarDisplay, snackBarError} =
    useContext(CommonContext);
  const isFocused = useIsFocused();
  const [showQRcode, setshowQrCode] = useState(false);
  const [personData, setPersonData] = useState({
    username: {
      name: 'Your name',
      value: '',
      placeHolder: 'ex :- Elon musk',
      maxLength: 20,
    },
    number: {
      name: 'Your number',
      value: '',
      keyBoardType: 'tel',
      maxLength: 10,
      placeHolder: 'ex :- 9234******',
    },
    company_name: {
      name: 'Your company name',
      value: '',
      placeHolder: 'ex :- Google',
      maxLength: 30,
    },
    Email: {
      name: 'Enter your email',
      value: '',
      keyBoardType: 'email',
      placeHolder: 'ex :- yourname@gmail.com',
      maxLength: 50,
    },
    website: {
      name: 'Enter your website',
      value: '',
      placeHolder: 'ex :- yourwebsite.dev',
      maxLength: 30,
    },
    city: {
      name: 'Enter your city',
      value: '',
      placeHolder: 'ex :- New York',
      maxLength: 50,
    },
  });
  const [qrData, setQrData] = useState();
  const onPressCreateQrCode = async () => {
    const validated_name = personData.username.value.trimEnd();
    const validated_number = personData.number.value.trimEnd();
    const validated_company_name = personData.company_name.value.trimEnd();
    const validated_email = personData.Email.value.trimEnd();
    const validated_website = personData.website.name.trimEnd();
    const validated_city = personData.city.name.trimEnd();

    const isNameValid = isEmptyString(validated_name);
    const isNumberValid = isValidPhoneNumber(validated_number);
    const isCompanyNameValid = isEmptyString(validated_company_name);
    const isEmail = EmailValidation(validated_email);
    // const isWebsite = isPersonalWebsite(validated_website);
    const isCityValid = isEmptyString(validated_city);

    if (isNameValid !== true) {
      showErrorMessage(isNameValid.messsage);
      return;
    }

    if (isNumberValid !== true) {
      showErrorMessage(isNumberValid.messsage);
      return;
    }

    if (isCompanyNameValid !== true) {
      showErrorMessage(isCompanyNameValid.messsage);
      return;
    }
    if (isEmail !== true) {
      showErrorMessage(isEmail.messsage);
      return;
    }

    if (isCityValid !== true) {
      showErrorMessage(isCityValid.messsage);
      return;
    }
    setQrData({
      name: validated_name,
      number: validated_number,
      company_name: validated_company_name,
      email: validated_email,
      website: validated_website,
      city: validated_city,
    });
    onPressCreateQr();
  };
  const showErrorMessage = message => {
    showHideSnackBar(true);
    changeErrorMessage(message);
  };
  const onChageText = (key, text) => {
    setPersonData({
      ...personData,
      [key]: {...personData[key], value: text},
    });
  };
  function onPressCreateQr() {
    setshowQrCode(!showQRcode);
  }

  return (
    <View style={styles.body}>
      {showQRcode ? <QRModal onClick={onPressCreateQr} data={qrData} /> : null}
      {snackBarDisplay && <Snackbar error={snackBarError} />}
      {/* <Text style={styles.HeadingText}>Data for QR</Text> */}
      <ScrollView style={{width: '90%', height: '100%'}}>
        <Text style={{...styles.HeadingText, color: '#636EAB'}}>
          Create a QR!
        </Text>
        <View style={styles.inputBody}>
          {Object.keys(personData).map(keys => {
            return (
              <View key={keys} style={styles.eachInput}>
                <InputField
                  placeholderAbove={personData[keys].name}
                  keyProps={keys}
                  placeHolder={personData[keys].placeHolder}
                  value={personData[keys].value}
                  onValueChange={onChageText}
                  keyBoardType={personData[keys].keyBoardType}
                  borderColor={'#636EAB'}
                  compulsory={true}
                  maxLength={personData[keys].maxLength}
                />
              </View>
            );
          })}
          <Button
            placeHolder={'Create QR'}
            backgroundColor={'#636EAB'}
            width={'70%'}
            height={'20%'}
            textColor={'#fff'}
            onPress={() => onPressCreateQrCode()}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default CreateQR;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#DBE9FF',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: '6%',
  },
  HeadingText: {
    fontSize: 35,
    fontWeight: '700',
    fontFamily: 'DM Sans',
    textAlign: 'center',
  },
  inputBody: {
    // borderWidth: 1,
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
});
