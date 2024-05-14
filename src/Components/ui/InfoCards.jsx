import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React from 'react';
import Idcard from '../../Assets/Images/man1.svg';
import Ionicons from 'react-native-vector-icons/Ionicons';
const InfoCards = () => {
  return (
    <View style={styles.body}>
      <Idcard style={{borderWidth: 1, height: 100, width: 100}} />
      <View style={styles.textBody}>
        <Text>Rohith Nair</Text>
        <Text>Role</Text>
        <Text>just added</Text>
      </View>
      <Ionicons name="call" size={30} color="#000" />
      <Ionicons name="mail" size={30} color="#000" />
    </View>
  );
};

export default InfoCards;
const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;
const styles = StyleSheet.create({
  body: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    width: '100%',
    height: HEIGHT * 0.15,
    // justifyContent: 'space-evenly',
  },
  textBody: {
    // borderWidth: 1,
    width: '50%',
    justifyContent: 'center',
    // alignItems: 'center',
  },
});
