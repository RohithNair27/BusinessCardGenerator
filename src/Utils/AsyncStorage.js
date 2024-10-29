import AsyncStorage from '@react-native-async-storage/async-storage';
export const storeDataLocally = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    const isKeyExists = await AsyncStorage.getItem(key);
    if (isKeyExists !== null) {
      return {
        success: false,
        message: 'The user is already added',
      };
    } else {
      await AsyncStorage.setItem(key, jsonValue);
      return {
        success: true,
        message: 'Your new connection has been added',
      };
    }
  } catch (e) {
    return {
      sucess: false,
      message: 'Error while adding user, kindly reach the development team',
    };
  }
};

export const readAsyncData = async () => {
  const informationFromLocal = [];
  try {
    const keys = await AsyncStorage.getAllKeys();
    const result = await AsyncStorage.multiGet(keys);
    for (let i = 0; i < keys.length; i++) {
      console.log(JSON.parse(result[i][1]), 'personal');
      informationFromLocal.push(JSON.parse(result[i][1]));
    }
    return informationFromLocal;
  } catch (error) {
    console.log(error);
  }
};

//adding personal data
export const personalData = async value => {
  try {
    const jsonValue = JSON.stringify(value);
    const isKeyExists = await AsyncStorage.getItem('PERSONAL_DATA');
    if (isKeyExists !== null) {
      return {
        success: false,
        message: 'Your data is already added',
      };
    } else {
      await AsyncStorage.setItem('PERSONAL_DATA', jsonValue);
      return {
        success: true,
        message: 'Your data has been added now',
      };
    }
  } catch (e) {
    return {
      sucess: false,
      message: 'Error while adding user, kindly reach the development team',
    };
  }
};

export const readPersonalData = async () => {
  const personalDataArray = {};
  const getData = await AsyncStorage.getItem('PERSONAL_DATA');
  return {person: 'rohith', age: 22};
};

export const clearAll = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    // clear error
  }
};
