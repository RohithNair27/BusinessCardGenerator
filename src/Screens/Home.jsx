import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  PermissionsAndroid,
} from 'react-native';
import React, {useState, useContext} from 'react';
import InputField from '../Components/ui/InputField';
import Button from '../Components/ui/Button';
import {userContext} from '../Context/QRdataContext';
import QRcode from '../Components/ui/QRcode';
import {launchCamera} from 'react-native-image-picker';
import {CountryPicker} from 'react-native-country-codes-picker';
const Home = () => {
  // let logo = require('../Assets/Images/qrImage.png');

  const HEIGHT = Dimensions.get('window').height;
  const {addUsers, usersAdded, show, selectFlag, changeCountryCode} =
    useContext(userContext);
  const [profilePictureUri, setProfilePictureUri] = useState(false);

  const [qrVisible, SetQrVisible] = useState(false);
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

  //handles opening and closing of modal
  const onPressQrButton = () => {
    SetQrVisible(!qrVisible);
  };

  //This code handles the change in input values and adds it to personData
  const handleInputChange = (key, text) => {
    setPersonData({
      ...personData,
      [key]: {...personData[key], value: text},
    });
    SetQrVisible(false);
  };

  //QR visisble on modal change
  const dataForQRCreation = () => {
    const qrData = JSON.stringify(personData);

    return <QRcode value={qrData} logo={logo} />;
  };

  // adding user to the list
  const onSaveUser = () => {
    if (profilePictureUri) {
      addUsers({...personData, profilePic: profilePictureUri});
    } else {
      addUsers(personData);
    }
    // console.log(usersAdded);
  };

  // handleClear buttons
  const onClickClear = () => {
    setPersonData({
      name: {title: 'Name', value: ''},
      number: {title: '74104 10123', value: ''},
      company_name: {title: 'Company Name', value: ''},
      Email: {title: 'Email', value: ''},
      website: {title: 'Website', value: ''},
      city: {title: 'City', value: ''},
    });
    SetQrVisible(false);
    setProfilePictureUri(false);
  };

  //permission for android
  const getMobilePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
        getProfilePictureDevice();
      } else {
        console.log('Camera permission denied');
      }
    } catch (error) {
      console.log(error);
    }
  };

  //This is used to take image from camera
  const getProfilePictureDevice = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };
    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('image not picked');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        let imageUri = response.assets?.[0]?.uri;
        console.log(imageUri);
        setProfilePictureUri(imageUri);
      }
    });
  };

  return (
    <View style={styles.body}>
      {/* <View style={styles.topFields}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text style={styles.headerText}>Business Card</Text>
          <View style={styles.clearButtonContainer}>
            <TouchableOpacity onPress={() => onClickClear()}>
              <Text style={{color: '#007afe'}}>Clear</Text>
            </TouchableOpacity>
          </View>
        </View>
        {profilePictureUri === false ? (
          // <Image
          //   source={require('../Assets/Images/demoimage.png')}
          //   resizeMode="contain"
          //   style={{height: '50%', width: '35%'}}
          // />
        ) : (
          <Image
            source={{uri: profilePictureUri}}
            resizeMode="contain"
            style={{height: '50%', borderRadius: 50, width: '35%'}}
          />
        )}

        <View style={{...styles.button, width: '80%', height: '25%'}}>
          <Button
            placeHolder="Choose Profile"
            backGroundColor={'#007afe'}
            onPress={getMobilePermission}
          />
        </View>
      </View>
      <View style={styles.inputBody}>
        <View style={styles.inputField}>
          {Object.keys(personData).map(keys => {
            return (
              <View key={keys} style={styles.eachInput}>
                <InputField
                  keyProps={keys}
                  placeHolder={personData[keys].title}
                  value={personData[keys].value}
                  onValueChange={handleInputChange}
                  keyBoardType={personData[keys].keyBoardType}
                />
              </View>
            );
          })}
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                placeHolder="QR"
                backGroundColor={'#d95e54'}
                onPress={onPressQrButton}
              />
            </View>
            <View style={styles.button}>
              <Button
                placeHolder="Save"
                backGroundColor={'#d95e54'}
                onPress={onSaveUser}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={{flex: 1, justifyContent: 'center'}}>
        {qrVisible ? dataForQRCreation() : null}
      </View>
      <CountryPicker
        show={show}
        pickerButtonOnPress={item => {
          changeCountryCode(item.dial_code);
          selectFlag();
        }}
        style={{
          // Styles for whole modal [View]
          modal: {
            height: HEIGHT / 1.5,
          },
        }}
        onBackdropPress={() => {
          selectFlag();
        }}
      /> */}
    </View>
  );
};

export default Home;

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f2f1f6',
  },
  topFields: {
    // borderWidth: 1,
    flex: 1.1,
    width: '80%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  inputBody: {
    // borderWidth: 1,
    width: '78%',
    flex: 2,
  },
  clearButtonContainer: {
    position: 'absolute',
    left: WIDTH / 2.2,
  },
  eachInput: {
    height: '10%',
    marginVertical: '2.2%',
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: 'lightgray',
    backgroundColor: 'white',
    borderWidth: 1,
  },

  headerText: {
    fontSize: 20,
    color: 'black',
    fontWeight: '700',
  },
  buttonContainer: {
    // borderWidth: 1,
    flexDirection: 'row',
    marginTop: '5%',
    width: '100%',
    justifyContent: 'space-between',
  },
  button: {
    width: '30%',
    height: '30%',
  },
});
