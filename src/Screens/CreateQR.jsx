import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState, useContext} from 'react';
import InputField from '../Components/ui/InputField';
import Button from '../Components/ui/Button';
import {useIsFocused} from '@react-navigation/native';
import Snackbar from '../Components/ui/Snackbar';
import {AppStateContext} from '../Context/AppStateContext/AppStateContext';
import Radiobutton from '../Components/ui/Radiobutton';
import {
  EmailValidation,
  isEmptyString,
  isValidPhoneNumber,
} from '../Utils/validation';
import {storeDataLocally} from '../Utils/AsyncStorage';
import {ConnectionsDataContext} from '../Context/ConnectionsContext/ConnectionsContext';
import {getCurrentDateFormatted} from '../Utils/CurrentDate';
import InfoModal from '../Components/ui/InfoModal';
import {getMobilePermission} from '../Utils/Camera';
import {AuthContext} from '../Context/AuthContext/AuthContext';
import {clearAll} from '../Utils/AsyncStorage';
const CreateQR = ({navigation}) => {
  const {showHideSnackBar, changeErrorMessage, snackBarDisplay, snackBarError} =
    useContext(AppStateContext);
  const {addData, termsAgreed, setTermsAgreed, peopleData} = useContext(
    ConnectionsDataContext,
  );
  const {
    loggedin,
    setLoggedin,
    loginData,
    setLoginData,
    isSignIn,
    changeSignIn,
  } = useContext(AuthContext);
  const isFocused = useIsFocused();
  // const [showQRcode, setshowQrCode] = useState(false);
  const [page, setPage] = useState(1);

  const initialState = {
    username: {
      name: 'Enter your full name',
      value: '',
      placeHolder: 'ex :-Elon musk',
      maxLength: 20,
      page: 1,
      compulsory: true,
    },
    number: {
      name: 'Your number',
      value: '',
      keyBoardType: 'tel',
      maxLength: 10,
      placeHolder: 'ex :- 9234******',
      page: 1,
      compulsory: true,
    },
    company_name: {
      name: 'Your company name',
      value: '',
      placeHolder: 'ex :- Google',
      maxLength: 30,
      page: 1,
      compulsory: true,
    },
    Email: {
      name: 'Enter your email',
      value: '',
      keyBoardType: 'email',
      placeHolder: 'ex :- yourname@gmail.com',
      maxLength: 50,
      page: 1,
      compulsory: true,
    },
    Country: {
      name: 'Country Origin',
      value: '',
      placeHolder: 'ex :- England',
      maxLength: 50,
      page: 2,
      compulsory: false,
    },
    Profession: {
      name: 'Profession',
      value: '',
      placeHolder: 'ex :- Product manager',
      maxLength: 50,
      page: 2,
      compulsory: true,
    },
  };
  const [personData, setPersonData] = useState(initialState);
  const [qrData, setQrData] = useState();

  //handle validation
  const onPressStoreDataLocal = async () => {
    const name = personData.username.value.trimEnd();
    const number = personData.number.value.trimEnd();
    const company_name = personData.company_name.value.trimEnd();
    const email = personData.Email.value.trimEnd();
    const profession = personData.Profession.value.trimEnd();
    const Country = personData.Country.value.trimEnd();
    const CurrentTime = getCurrentDateFormatted();

    //validation on device
    const isNameValid = isEmptyString(name);
    const isNumberValid = isValidPhoneNumber(number);
    const isCompanyNameValid = isEmptyString(company_name);
    const isProfessionValid = isEmptyString(profession);
    const isEmail = EmailValidation(email);

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

    if (isProfessionValid !== true) {
      showErrorMessage(isProfessionValid.messsage);
      return;
    }
    if (termsAgreed !== true) {
      showErrorMessage('Kindly accept the terms');
      return;
    }
    const saveLocally = await storeDataLocally(email, {
      name: name,
      number: number,
      company_name: company_name,
      email: email,
      city: Country,
      profession: profession,
      terms: termsAgreed,
      Time: CurrentTime,
    });
    if (saveLocally.success) {
      addData(
        {
          name: name,
          number: number,
          company_name: company_name,
          email: email,
          city: Country,
          profession: profession,
          terms: termsAgreed,
          Time: CurrentTime,
        },
        false,
      );
      setPersonData(initialState);
      navigation.navigate('Buzzcard');
    } else {
      showErrorMessage(saveLocally.message);
    }
  };
  const showErrorMessage = message => {
    showHideSnackBar(true);
    changeErrorMessage(message);
  };

  //updating the onChange using the key
  const onChageText = (key, text) => {
    setPersonData({
      ...personData,
      [key]: {...personData[key], value: text},
    });
  };

  //handle terms
  const handleOptionSelect = () => {
    setTermsAgreed(!termsAgreed);
    navigation.navigate('Terms');
  };

  //change page
  function onPressNextPage(pageChange) {
    if (pageChange) {
      setPage(page + 1);
    } else {
      setPage(page - 1);
    }
  }

  useEffect(() => {
    setPage(1);
  }, [isFocused]);

  return (
    <View style={styles.body}>
      {snackBarDisplay && <Snackbar error={snackBarError} />}
      {isSignIn && <InfoModal />}
      <View style={styles.topFields}>
        <Text style={styles.headerText}>Add your details</Text>
        <Text
          style={{
            ...styles.headerText,
            fontSize: 15,
            fontWeight: '400',
            paddingBottom: 26,
          }}>
          *This data will be stored in this device*
        </Text>
      </View>
      <View
        style={{
          width: '85%',
          height: '63%',
          marginTop: 5,
          justifyContent: 'center',
          // borderWidth: 1,
        }}>
        {Object.keys(personData)
          .filter(element => {
            return personData[element].page === page;
          })
          .map(keys => {
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
                  compulsory={personData[keys].compulsory}
                  maxLength={personData[keys].maxLength}
                  paddingLeft="5%"
                />
              </View>
            );
          })}
        {page === 2 ? (
          <>
            <Radiobutton terms={termsAgreed} onClick={handleOptionSelect} />
          </>
        ) : null}
      </View>
      {page === 1 ? (
        <View
          style={{
            width: '85%',
            height: '8%',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          {/* <Button
            placeHolder={'Capture Image'}
            backgroundColor={'#FF7377'}
            width={'60%'}
            height={'90%'}
            textColor={'#fff'}
            onPress={() => onPressCaptureImage()}
          /> */}
          <Button
            placeHolder={'-->'}
            backgroundColor={'#FF7377'}
            width={'17%'}
            height={'100%'}
            textColor={'#fff'}
            onPress={() => onPressNextPage(true)}
          />
        </View>
      ) : (
        <View
          style={{
            // borderWidth: 1,
            width: '85%',
            height: '10%',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <Button
            placeHolder={'<--'}
            backgroundColor={'#FF7377'}
            width={'20%'}
            height={'90%'}
            textColor={'#fff'}
            onPress={() => onPressNextPage(false)}
          />
          <Button
            placeHolder={'Store data'}
            backgroundColor={'#FF7377'}
            width={'60%'}
            height={'90%'}
            textColor={'#fff'}
            onPress={() => onPressStoreDataLocal()}
          />
        </View>
      )}
    </View>
  );
};

export default CreateQR;

const styles = StyleSheet.create({
  body: {
    flex: 1,

    backgroundColor: '#DBE9FF',
    alignItems: 'center',
  },
  topFields: {
    backgroundColor: '#103550',
    height: '25%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 30,
  },
  headerText: {
    fontSize: 30,
    color: '#ffff',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },

  inputBody: {
    borderWidth: 1,
    overflow: 'visible',
  },
  eachInput: {
    marginBottom: 20,
  },
});
