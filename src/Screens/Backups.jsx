import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BackupImage from '../Assets/Images/upload.svg';
import Button from '../Components/ui/Button';
const Backups = () => {
  return (
    <View style={styles.body}>
      <BackupImage />
      {/* <Text>Keep your data safe</Text> */}

      <View style={styles.buttonHolder}>
        <Button
          placeHolder={'Upload backup'}
          backgroundColor={'#FF7377'}
          width={'100%'}
          height={'25%'}
          textColor={'#fff'}
        />
        <Button
          placeHolder={'Import your data'}
          width={'100%'}
          height={'25%'}
          textColor={'#FF7377'}
          bordercolor={'#FF7377'}
        />
      </View>
      <Text>All the data will be updated on our server</Text>
    </View>
  );
};

export default Backups;

const styles = StyleSheet.create({
  body: {
    borderWidth: 1,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DBE9FF',
  },
  buttonHolder: {
    // borderWidth: 1,
    height: '30%',
    width: '80%',
    justifyContent: 'space-evenly',
  },
});
