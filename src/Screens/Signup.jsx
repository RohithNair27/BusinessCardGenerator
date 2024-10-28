import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Alert,
} from 'react-native';
import React, {useState, useContext} from 'react';
import InputField from '../Components/ui/InputField';
import Button from '../Components/ui/Button';
import Loader from '../Components/ui/Loader';
import {signUpFirebase} from '../Firebase/FirebaseAuth';
import {AuthContext} from '../Context/AuthContext/AuthContext';
import {EmailValidation, PasswordValidation} from '../Utils/validation';
import {AppStateContext} from '../Context/AppStateContext/AppStateContext';
import Snackbar from '../Components/ui/Snackbar';
const SignupPage = ({navigation}) => {
  const {setLoggedin, setLoginData, setFirstTimeUser} = useContext(AuthContext);
  const {
    snackBarDisplay,
    showHideSnackBar,
    snackBarError,
    changeErrorMessage,
    isLoading,
    changeLoading,
    setInfoModalVisible,
  } = useContext(AppStateContext);

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

  //this function validates the email locally and handles error messages while sign in
  const onPressSignUp = async () => {
    const email = signupData.Email_id.value.trimEnd();
    const password = signupData.Password.value.trimEnd();
    const username = signupData.User_Name.value.trimEnd();

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

    if (username === '') {
      showErrorMessage('Kindly add your username');
      return;
    }
    changeLoading(true);
    try {
      const response = await signUpFirebase(email, password, username);
      if (response.message === 'User account created & signed in!') {
        setInfoModalVisible({
          visible: true,
          modalType: 'WELCOME_MODAL',
        }); //user registration
        setLoginData(response.userInfo); // user data
        console.log(response.userInfo);
        setLoggedin(true); // for stacknavigation handeling
      } else if (response === 'That email address is already in use!') {
        showErrorMessage('Account exists kindly login');
      } else {
        showErrorMessage('error');
      }
    } catch (error) {
      showErrorMessage('An error occurred during sign up');
    } finally {
      changeLoading(false);
    }
  };

  const showErrorMessage = message => {
    showHideSnackBar(true);
    changeErrorMessage(message);
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
      {snackBarDisplay && <Snackbar error={snackBarError} />}
      <Text style={styles.welcomeText}>Let's make your </Text>
      <Text style={{...styles.welcomeText, color: '#636EAB'}}>account!</Text>
      <View style={styles.bottomBody}>
        <View style={styles.eachInput}>
          <InputField
            placeholderAbove={'Email'}
            value={signupData.Email_id.value}
            keyProps={signupData.Email_id.name}
            placeHolder={'ex - youremail@gmail.com'}
            onValueChange={onChageText}
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
            placeholderAbove={'User name'}
            value={signupData.User_Name.value}
            keyProps={signupData.User_Name.name}
            placeHolder={'Ex - nickname'}
            onValueChange={onChageText}
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
            placeholderAbove={'Password'}
            value={signupData.Password.value}
            keyProps={signupData.Password.name}
            placeHolder={'Password'}
            onValueChange={onChageText}
            keyBoardType={'text'}
            borderColor={'#636EAB'}
            compulsory={false}
            maxLength={50}
            paddingLeft="5%"
            secureTextEntry={true}
          />
        </View>

        <Button
          placeHolder={'Sign in'}
          width={'100%'}
          backgroundColor={'#636EAB'}
          textColor={'#ffff'}
          height={'13%'}
          onPress={onPressSignUp}
        />
        <View style={styles.loginNavigation}>
          <Text>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}>
            <Text style={{color: '#636EAB'}}>Log in</Text>
          </TouchableOpacity>
        </View>
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
  loginNavigation: {
    height: '10%',
    width: '65%',
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
