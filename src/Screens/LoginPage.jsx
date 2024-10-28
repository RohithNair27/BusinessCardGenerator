import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React, {useContext, useState} from 'react';
import InputField from '../Components/ui/InputField';
import Button from '../Components/ui/Button';
import {AppStateContext} from '../Context/AppStateContext/AppStateContext';
import {AuthContext} from '../Context/AuthContext/AuthContext';
import {loginFirebase} from '../Firebase/FirebaseAuth';
import Loader from '../Components/ui/Loader';
import {EmailValidation, PasswordValidation} from '../Utils/validation';
const LoginPage = ({navigation}) => {
  const {showHideSnackBar, changeErrorMessage, isLoading, changeLoading} =
    useContext(AppStateContext);

  const {loggedin, setLoggedin} = useContext(AuthContext);
  const [loginData, setLoginData] = useState({
    Email_id: {
      name: 'Email_id',
      value: '',
    },
    Password: {
      name: 'Password',
      value: '',
    },
  });

  const onChageText = (key, text) => {
    setLoginData({
      ...loginData,
      [key]: {...loginData[key], value: text},
    });
  };
  const onPressSignUp = async () => {
    const email = loginData?.Email_id.value.trimEnd();
    const password = loginData?.Password.value.trimEnd();

    const isEmailValid = EmailValidation(email);
    const isPasswordValid = PasswordValidation(password);

    if (isEmailValid !== true) {
      showErrorMessage(isEmailValid.messsage);
      return;
    }

    if (isPasswordValid !== true) {
      showErrorMessage(isPasswordValid.messsage);
      return;
    }
    changeLoading(true);
    try {
      let response = await loginFirebase(
        loginData.Email_id.value,
        loginData.Password.value,
      );

      if (response.message === 'User exists!') {
        console.log(response.userInfo, 'response');
        setLoginData(response.userInfo.user);
        setLoggedin(true);
      } else if (response === 'auth/invalid-credential') {
        showErrorMessage('User does not exists');
      } else {
        showErrorMessage(response);
      }
    } catch (error) {
      showErrorMessage('An error occurred during Login up');
    } finally {
      changeLoading(false);
    }
  };
  const showErrorMessage = message => {
    showHideSnackBar(true);
    changeErrorMessage(message);
  };
  return isLoading ? (
    <Loader />
  ) : (
    <View style={styles.body}>
      <Text style={styles.welcomeText}>Welcome back!</Text>
      <Text style={{...styles.welcomeText, color: '#636EAB'}}>
        Let's connect with the world
      </Text>
      <View style={styles.bottomBody}>
        <View style={styles.eachInput}>
          <InputField
            placeholderAbove={'Email'}
            value={loginData.Email_id.value}
            keyProps={loginData.Email_id.name}
            onValueChange={onChageText}
            placeHolder={'ex - youremail@gmail.com'}
            keyBoardType={'text'}
            borderColor={'#636EAB'}
            compulsory={false}
            maxLength={50}
            paddingLeft="5%"
            secureTextEntry={false}
          />
        </View>
        <View style={styles.eachInput}>
          <InputField
            placeholderAbove={'password'}
            placeHolder={'password'}
            value={loginData.Password.value}
            onValueChange={onChageText}
            keyProps={loginData.Password.name}
            keyBoardType={'text'}
            borderColor={'#636EAB'}
            compulsory={false}
            maxLength={50}
            paddingLeft="5%"
            secureTextEntry={true}
          />
        </View>

        <Button
          placeHolder={'Log in'}
          width={'100%'}
          backgroundColor={'#636EAB'}
          textColor={'#ffff'}
          height={'13%'}
          onPress={onPressSignUp}
        />

        <View style={styles.loginNavigation}>
          <Text>Don't have an ID?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignupPage')}>
            <Text style={{color: '#636EAB'}}>Sign in</Text>
          </TouchableOpacity>
        </View>
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
  loginNavigation: {
    height: '10%',
    width: '50%',
    // borderWidth: 1,
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  eachInput: {
    marginBottom: 20,
  },
});
