import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  PermissionsAndroid,
} from 'react-native';
import React, {useState, useContext} from 'react';
import {userContext} from '../Context/QRdataContext';
import {CommonContext} from '../Context/commonContext/CommonContext';
import QRcode from '../Components/ui/QRcode';
import {launchCamera} from 'react-native-image-picker';
import Idcard from '../Assets/Images/id-card.svg';
import Qr from '../Assets/Images/qrsvg.svg';
import InfoCards from '../Components/ui/InfoCards';
import QRModal from '../Components/QRModal';
const Home = ({navigation}) => {
  const HEIGHT = Dimensions.get('window').height;
  const {loginData} = useContext(userContext);

  const onPressQrButton = () => {
    SetQrVisible(!qrVisible);
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
      <StatusBar backgroundColor={'#103550'} />

      <View style={styles.topFields}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Hello {loginData?.displayName}</Text>
          <Text style={{...styles.headerText, fontSize: 20}}>
            Who you want to meet today?
          </Text>
        </View>
        <View style={styles.navigateCard}>
          <TouchableOpacity
            style={styles.navigateEachCard}
            onPress={() => {
              navigation.navigate('New Card');
            }}>
            <Idcard style={styles.navigationImage} height={'60%'} />
            <Text>New Card</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navigateEachCard}>
            <Qr style={styles.navigationImage} height={'60%'} width={'30%'} />
            <Text>Scan</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <View style={styles.inputBody}>
        <InfoCards />
        <InfoCards />
        <InfoCards />
      </View> */}
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
    backgroundColor: '#DBE9FF',
    // borderWidth: 2,
  },
  topFields: {
    backgroundColor: '#103550',
    // borderWidth: 1,
    height: HEIGHT * 0.3,
    width: '100%',
    // justifyContent: 'space-evenly',
    // alignItems: 'center',
    // flexDirection: 'row',
    // borderBottomLeftRadius: 40,
    // borderBottomRightRadius: 40,
  },
  header: {
    top: '10%',
    left: '10%',
    // borderWidth: 1,
    borderColor: 'black',
  },
  headerText: {
    fontSize: 40,
    color: '#ffff',
  },
  navigateCard: {
    position: 'absolute',
    top: HEIGHT * 0.25,
    right: '5%',
    width: '60%',
    flexDirection: 'row',
    height: '35%',
    justifyContent: 'space-evenly',
    zIndex: 1,
  },
  navigateEachCard: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
    backgroundColor: '#ffff',
    borderRadius: 10,
    zIndex: 1,
  },
  navigationImage: {
    resizeMode: 'contain',
    width: '20%',
    height: '20%',
  },
  inputBody: {
    paddingTop: '15%',
    borderWidth: 1,
    height: HEIGHT * 0.4,
    width: '100%',
    zIndex: 0,
    top: HEIGHT * 0.06,
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
