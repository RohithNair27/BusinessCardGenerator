import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import QRCode from 'react-native-qrcode-svg';
const QRcode = ({value, size}) => {
  let logo = require('../../Assets/Images/qrImage.png');
  return (
    <QRCode
      size={size}
      value={value}
      logo={logo}
      logoSize={30}
      logoBackgroundColor="transparent"
    />
  );
};

export default QRcode;

const styles = StyleSheet.create({});
