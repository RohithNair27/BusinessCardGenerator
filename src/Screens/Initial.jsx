import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Logo from '../Assets/Images/img.svg';
import AntDesign from 'react-native-vector-icons/AntDesign';
const InitialScreen = ({navigation}) => {
  return (
    <View style={styles.body}>
      <StatusBar backgroundColor={'#DBE9FF'} />
      <Text style={styles.welcomeText}>
        Let's get you <Text style={{color: '#636EAB'}}>onboard!</Text>
      </Text>
      <Text style={styles.introText}>
        Finish setting up your account and start scanning instantly
      </Text>
      <Logo height={'50%'} width={'100%'} />
      <TouchableOpacity
        style={styles.navigateButton}
        onPress={() => navigation.navigate('SignupPage')}>
        <AntDesign name="arrowright" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};
let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#DBE9FF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4%',
  },
  welcomeText: {
    bottom: deviceHeight * 0.1,
    fontSize: 30,
    fontWeight: '700',
    fontFamily: 'DM Sans',
  },
  introText: {
    bottom: deviceHeight * 0.1,
    fontSize: 20,
    color: 'gray',
    width: '90%',
    textAlign: 'center',
  },
  Image: {
    width: '100%',
    height: '50%',
  },
  navigateButton: {
    position: 'absolute',
    backgroundColor: '#D94A23',
    width: 60,
    height: 60,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: '6%',
    right: '10%',
  },
});

export default InitialScreen;
