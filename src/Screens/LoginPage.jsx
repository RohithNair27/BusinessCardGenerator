import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React, {useEffect} from 'react';
import InputField from '../Components/ui/InputField';
import Button from '../Components/ui/Button';
import {signUpFirebase} from '../Firebase/FirebaseAuth';
const LoginPage = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.welcomeText}>Welcome back!</Text>
      <Text style={{...styles.welcomeText, color: '#636EAB'}}>
        Let's connect with the world
      </Text>
      <View style={styles.bottomBody}>
        <InputField
          height={'13%'}
          width={'100%'}
          placeholderAbove={'Email id'}
        />
        <InputField
          height={'13%'}
          width={'100%'}
          placeholderAbove={'User name'}
        />

        <Button
          placeHolder={'Sign in'}
          width={'100%'}
          backgroundColor={'#636EAB'}
          textColor={'#ffff'}
          height={'13%'}
        />

        <Text>
          Don't have an ID?
          <TouchableOpacity>
            <Text>login</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};
let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;
export default LoginPage;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#DBE9FF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '6%',
  },
  bottomBody: {
    flex: 0.7,
    // borderWidth: 1,
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 35,
    fontWeight: '700',
    fontFamily: 'DM Sans',
    alignSelf: 'flex-start',
  },
  bottom: {
    borderWidth: 1,
    flex: 0.5,
    width: '100%',
  },
});
