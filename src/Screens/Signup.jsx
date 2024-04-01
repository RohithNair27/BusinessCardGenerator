import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import InputField from '../Components/ui/InputField';
import Button from '../Components/ui/Button';
import {signUpFirebase} from '../Firebase/FirebaseAuth';
const SignupPage = () => {
  const [signupData, setSignupData] = useState({
    Email_id: '',
    User_name: '',
    Password: '',
  });

  const onPressSignUp = () => {
    signUpFirebase(signupData.Email_id, signupData.Password);
  };

  return (
    <View style={styles.body}>
      <Text style={styles.welcomeText}>Let's make your </Text>
      <Text style={{...styles.welcomeText, color: '#636EAB'}}>account!</Text>
      <View style={styles.bottomBody}>
        <InputField
          height={'13%'}
          width={'100%'}
          placeholderAbove={'Email id'}
          value={signupData.Email_id}
        />
        <InputField
          height={'13%'}
          width={'100%'}
          placeholderAbove={'User name'}
          value={signupData.User_name}
        />
        <InputField
          height={'13%'}
          width={'100%'}
          placeholderAbove={'Password'}
          value={signupData.Password}
        />
        <Button
          placeHolder={'Sign in'}
          width={'100%'}
          backgroundColor={'#636EAB'}
          textColor={'#ffff'}
          height={'13%'}
          onPress={onPressSignUp}
        />

        <Text>
          Already have an account?
          <TouchableOpacity>
            <Text>Sign in</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};
let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;
export default SignupPage;

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
