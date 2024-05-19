import AsyncStorage from '@react-native-async-storage/async-storage';
export const storeDataLocally = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    const isKeyExists = await AsyncStorage.getItem(key);
    if (isKeyExists !== null) {
      console.log('you are already added');
      return false;
    } else {
      await AsyncStorage.setItem(key, jsonValue);
      return true;
    }
  } catch (e) {
    console.log('unable to store kindly backup and clear data of the app');
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
