import AsyncStorage from '@react-native-async-storage/async-storage';
export const storeDataLocally = async (key, value) => {
  console.log(key, value);
  try {
    const jsonValue = JSON.stringify(value);
    const isKeyExists = await AsyncStorage.getItem(key);
    if (isKeyExists !== null) {
      console.log('you are already added');
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
      informationFromLocal.push(JSON.parse(result[i][1]));
    }
    console.log('inital render in async', informationFromLocal);
    return informationFromLocal;
  } catch (error) {
    console.log(error);
  }
};

export const clearAll = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    // clear error
  }

  console.log('Done.');
};
