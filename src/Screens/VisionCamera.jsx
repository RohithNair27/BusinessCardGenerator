import {
  StyleSheet,
  Text,
  View,
  PermissionsAndroid,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
const VisionCamera = ({navigation}) => {
  return (
    <QRCodeScanner
      onRead={() => console.log('working')}
      topContent={
        <View style={styles.top}>
          <Text style={styles.textBold}>Scan the QR to store the data</Text>
        </View>
      }
      bottomContent={<View style={styles.top}></View>}
    />
  );
};

export default VisionCamera;

const styles = StyleSheet.create({
  top: {
    flex: 1,
    width: '100%',
    backgroundColor: '#103550',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBold: {
    fontWeight: '500',
    color: '#ffff',
    fontSize: 23,
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
