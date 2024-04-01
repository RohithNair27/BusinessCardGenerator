import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState, useContext} from 'react';
import InputField from '../Components/ui/InputField';
import Button from '../Components/ui/Button';
import Loader from '../Components/ui/Loader';
import {signUpFirebase} from '../Firebase/FirebaseAuth';
import {userContext} from '../Context/QRdataContext';
const SignupPage = ({navigation}) => {
  const {isLoading, changeLoading} = useContext(userContext);
  const [signupData, setSignupData] = useState({
    Email_id: {
      name: 'Email_id',
      value: '',
    },
    User_Name: {
      name: 'User_Name',
      value: '',
    },
    Password: {
      name: 'Password',
      value: '',
    },
  });

  const onPressSignUp = async () => {
    changeLoading(true);
    let response = await signUpFirebase(
      signupData.Email_id.value,
      signupData.Password.value,
    );

    changeLoading(false);
    console.log(response);
  };
  const onChageText = (key, text) => {
    setSignupData({
      ...signupData,
      [key]: {...signupData[key], value: text},
    });
  };

  return isLoading ? (
    <Loader />
  ) : (
    <View style={styles.body}>
      <Text style={styles.welcomeText}>Let's make your </Text>
      <Text style={{...styles.welcomeText, color: '#636EAB'}}>account!</Text>
      <View style={styles.bottomBody}>
        <InputField
          height={'13%'}
          width={'100%'}
          placeholderAbove={'Email id'}
          value={signupData.Email_id.value}
          keyProps={signupData.Email_id.name}
          onValueChange={onChageText}
        />
        <InputField
          height={'13%'}
          width={'100%'}
          placeholderAbove={'User name'}
          value={signupData.User_Name.value}
          keyProps={signupData.User_Name.name}
          onValueChange={onChageText}
        />
        <InputField
          height={'13%'}
          width={'100%'}
          placeholderAbove={'Password'}
          value={signupData.Password.value}
          keyProps={signupData.Password.name}
          onValueChange={onChageText}
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
          <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}>
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
