import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React, {useEffect, useContext, useState} from 'react';
import InputField from '../Components/ui/InputField';
import Button from '../Components/ui/Button';
import {userContext} from '../Context/QRdataContext';
import {loginFirebase} from '../Firebase/FirebaseAuth';
import Loader from '../Components/ui/Loader';
const LoginPage = ({navigation}) => {
  const {isLoading, changeLoading} = useContext(userContext);

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
    changeLoading(true);
    let response = await loginFirebase(
      loginData.Email_id.value,
      loginData.Password.value,
    );
    changeLoading(false);
    console.log(response);
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
        <InputField
          height={'13%'}
          width={'100%'}
          placeholderAbove={'Email id'}
          value={loginData.Email_id.value}
          keyProps={loginData.Email_id.name}
          onValueChange={onChageText}
        />
        <InputField
          height={'13%'}
          width={'100%'}
          placeholderAbove={'User name'}
          value={loginData.Password.value}
          keyProps={loginData.Password.name}
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
          Don't have an ID?
          <TouchableOpacity onPress={() => navigation.navigate('SignupPage')}>
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
