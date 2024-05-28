import {PermissionsAndroid} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {updatePersonalProfilePicture} from '../Firebase/FirebaseAuth';
export const getMobilePermission = async typeOfImage => {
  try {
    const result = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      PermissionsAndroid.PERMISSIONS.ACCESS_MEDIA_LOCATION,
    );
    if (result === PermissionsAndroid.RESULTS.GRANTED) {
      const uri = await getProfilePictureDevice(typeOfImage);
      console.log(uri, 'uri fun');
      return uri;
    } else {
      Alert.alert('Camera permission denied');
    }
  } catch (error) {
    console.error(error);
  }
};

//take profile picture
const getProfilePictureDevice = async typeOfImage => {
  const options = {
    mediaType: 'photo',
    includeBase64: false,
    maxHeight: 200,
    cameraType: 'front',
    maxWidth: 200,
  };
  if (typeOfImage === 'launchImage') {
    await launchImageLibrary(options, response => {
      if (response.didCancel) {
        return 'image not picked';
      } else {
        const imageUri = response;
        updatePersonalProfilePicture(imageUri.assets[0].uri);
        // console.log(imageUri.assets[0].uri);
      }
    });
  } else {
    await launchCamera(options, response => {
      if (response.didCancel) {
        return 'image not picked';
      } else {
        const imageUri = response.assets?.[0]?.uri;
        return imageUri;
      }
    });
  }
};
