import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
const CameraQR = () => {
  return (
    <QRCodeScanner
      onRead={e => console.log(e)}
      bottomContent={
        <TouchableOpacity style={styles.buttonTouchable}>
          <Text style={styles.buttonText}>OK. Got it!</Text>
        </TouchableOpacity>
      }
    />
  );
};

export default CameraQR;

const styles = StyleSheet.create({});
