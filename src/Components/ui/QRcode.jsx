import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import QRCode from 'react-native-qrcode-svg';
const QRcode = ({value}) => {
  return <QRCode size={100} value={value} />;
};

export default QRcode;

const styles = StyleSheet.create({});
