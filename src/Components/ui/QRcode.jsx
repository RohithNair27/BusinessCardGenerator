import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import QRCode from 'react-native-qrcode-svg';
const QRcode = ({value, size, peronsalInfo}) => {
  // console.log(peronsalInfo);
  return (
    <QRCode
      size={size}
      value={JSON.stringify(peronsalInfo)}
      logoSize={30}
      // logoBackgroundColor="transparent"
    />
  );
};

export default QRcode;

const styles = StyleSheet.create({});
