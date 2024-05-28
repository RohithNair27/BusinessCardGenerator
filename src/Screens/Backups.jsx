import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BackupImage from '../Assets/Images/upload.svg';
import Button from '../Components/ui/Button';
import Construction from '../Assets/Images/construction.svg';
const Backups = () => {
  return (
    <View style={styles.body}>
      <View>
        <Text style={styles.header}>Construction Underway</Text>
        <Text style={styles.subtext}>
          Pardon our dust while we build something amazing!
        </Text>
      </View>
      <Construction />
      {/* <Text style={styles.text}>
        This functionality is currently being developed.
      </Text>
      <Text style={styles.subtext}>
        Soon, you will be able to save all your connections to the cloud and
        access them from any device.
      </Text> */}

      {/* <BackupImage />
      <Text>Last cloud backup</Text>
      <Text style={styles.text}>May 1 2024,8:00 PM</Text>

      <View style={styles.buttonHolder}>
        <Button
          placeHolder={'Upload backup'}
          backgroundColor={'#FF7377'}
          width={'100%'}
          height={'22%'}
          textColor={'#fff'}
        />
        <Button
          placeHolder={'Import your data'}
          width={'100%'}
          height={'22%'}
          textColor={'#FF7377'}
          bordercolor={'#FF7377'}
        />
      </View>
      <Text>Cloud backups Account</Text>
      <Text>Rohith@gmail.com</Text>
      <Text>All the data will be updated on our server</Text> */}
    </View>
  );
};

export default Backups;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#DBE9FF',
    padding: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#103550',
    marginBottom: 10,
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    color: '#444',
    marginVertical: 20,
    textAlign: 'center',
  },
  subtext: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 10,
  },
});
