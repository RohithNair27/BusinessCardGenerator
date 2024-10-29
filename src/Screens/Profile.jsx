import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React, {useEffect, useState, useContext} from 'react';
import QRcode from '../Components/ui/QRcode';
import Button from '../Components/ui/Button';
import Snackbar from '../Components/ui/Snackbar';
import {
  EmailValidation,
  isEmptyString,
  isValidPhoneNumber,
} from '../Utils/validation';
import InputField from '../Components/ui/InputField';
import {ConnectionsDataContext} from '../Context/ConnectionsContext/ConnectionsContext';
import {AppStateContext} from '../Context/AppStateContext/AppStateContext';
import {personalData} from '../Utils/AsyncStorage';
import {getCurrentDateFormatted} from '../Utils/CurrentDate';
import ProfilePic from '../Assets/Images/profile_drawer.svg';
import {clearAll} from '../Utils/AsyncStorage';
const Profile = ({navigation}) => {
  // clearAll();
  const {myData, AddMyPersonalData} = useContext(ConnectionsDataContext);
  const {showHideSnackBar, changeErrorMessage, snackBarDisplay, snackBarError} =
    useContext(AppStateContext);
  const [isTermsAgreed, setTermsAgreed] = useState(false);

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
  const data = {
    Time: 'October 8, 2024',
    city: 'India',
    company_name: 'Hshshaha',
    email: 'Nair@gmail.com',
    name: 'Nair',
    number: '4664646444',
    profession: 'Hshshhsha',
    terms: false,
  };

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
    // if (isTermsAgreed !== true) {
    //   showErrorMessage('Kindly accept the terms');
    //   return;
    // }

    const savePersonalDataLocally = await personalData({
      name: name,
      number: number,
      company_name: company_name,
      email: email,
      city: Country,
      profession: profession,
      terms: isTermsAgreed,
      Time: CurrentTime,
    });

    console.log(savePersonalDataLocally);
    if (savePersonalDataLocally.success) {
      AddMyPersonalData({
        name: name,
        number: number,
        company_name: company_name,
        email: email,
        city: Country,
        profession: profession,
        terms: isTermsAgreed,
        Time: CurrentTime,
      });
    } else {
      showErrorMessage(savePersonalDataLocally.message);
      // navigation.navigate('Home');
    }
  };

  const onChageText = (key, text) => {
    setPersonData({
      ...personData,
      [key]: {...personData[key], value: text},
    });
  };
  const showErrorMessage = message => {
    showHideSnackBar(true);
    changeErrorMessage(message);
  };
  console.log(myData);
  return (
    <View style={styles.centeredView}>
      {myData.length > 0 ? (
        <View style={styles.qrview}>
          <View style={styles.idCard}>
            <View style={styles.header}>
              <ProfilePic />

              <View style={styles.headerTextContainer}>
                <View>
                  <Text style={{...styles.label, color: 'black'}}>
                    Fullname
                  </Text>
                  <Text
                    numberOfLines={2}
                    ellipsizeMode="tail"
                    style={{
                      fontSize: 20,
                      color: 'white',
                      fontWeight: 'bold',
                    }}>
                    {myData[0]?.name}
                  </Text>
                </View>
                <View>
                  <Text style={[styles.label, {color: 'black'}]}>Position</Text>
                  <Text
                    numberOfLines={2}
                    ellipsizeMode="tail"
                    style={{
                      fontSize: 20,
                      color: 'white',
                      fontWeight: 'bold',
                    }}>
                    {data?.profession}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.body}>
              <View style={[styles.id]}>
                <Text style={styles.label}>Company name</Text>
                <Text style={styles.value}>{myData[0]?.company_name}</Text>
              </View>
              <View style={[styles.id]}>
                <Text style={styles.label}>Position</Text>
                <Text style={styles.value}>Senior Software Engineer</Text>
              </View>
              <View style={[styles.id]}>
                <Text style={styles.label}>Phone NO.</Text>
                <Text style={styles.value}>{myData[0]?.number}</Text>
              </View>
              <View style={[styles.id]}>
                <Text style={styles.label}>E-mail</Text>
                <Text style={styles.value}>{myData[0]?.email}</Text>
              </View>
              <View style={[styles.id]}>
                <Text style={styles.label}>Country</Text>
                <Text style={styles.value}>{myData[0]?.city}</Text>
              </View>
              <View style={[styles.id]}>
                <Text style={styles.label}>Connected Date</Text>
                <Text style={[styles.value, {color: 'rgb(61,190,139)'}]}>
                  {myData[0]?.Time}
                </Text>
              </View>
            </View>
            <View style={styles.footer}>
              <QRcode size={150} peronsalInfo={myData[0]} />
            </View>
          </View>
        </View>
      ) : (
        <View style={styles.centeredView}>
          {snackBarDisplay && <Snackbar error={snackBarError} />}
          <View style={styles.headerTextBody}>
            <Text style={styles.headerTextOne}>Add your data</Text>
            <Text style={styles.headerTextTwo}>
              This Data can be used shared with other people using the same app
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
                    compulsory={personData[keys].compulsory}
                    maxLength={personData[keys].maxLength}
                    paddingLeft="5%"
                  />
                </View>
              );
            })}
          </View>
          <Button
            placeHolder={'Add my data'}
            width={'80%'}
            backgroundColor={'#636EAB'}
            textColor={'#ffff'}
            height={'7%'}
            onPress={onPressStoreDataLocal}
          />
        </View>
      )}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  centeredView: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#DBE9FF',
  },
  qrview: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },
  idCard: {
    flex: 1,
    width: '100%',
    borderRadius: 10,
  },
  header: {
    flex: 1.6,
    borderRadius: 15,
    width: '90%',
    backgroundColor: '#FF7377',
    padding: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  headerTextContainer: {
    // borderWidth: 1,
    maxWidth: '60%',
    maxHeight: '100%',
    paddingLeft: 10,
  },
  body: {
    flex: 2,
    width: '95%',
    justifyContent: 'center',
    // alignItems: 'center',
    alignSelf: 'center',
    paddingLeft: 10,
    // borderWidth: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  name: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  textContainer: {
    // borderWidth: 1,
    height: '100%',
    width: '60%',
    justifyContent: 'space-evenly',
  },
  idContainer: {
    flexDirection: 'row',
  },
  value: {
    marginRight: 8,
    fontWeight: '500',
    fontSize: 15,
    marginBottom: 20,
  },
  label: {
    marginTop: 20,
    color: 'lightgray',
  },

  footer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  id: {
    // borderWidth: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    width: '45%',
    height: '40%',
  },
  headerTextBody: {
    // borderWidth: 1,
    alignItems: 'center',
    textAlign: 'center',
    width: '80%',
  },
  headerTextOne: {
    fontSize: 30,
    fontWeight: '600',
  },
  headerTextTwo: {
    textAlign: 'center',
    marginTop: 10,
  },
});
