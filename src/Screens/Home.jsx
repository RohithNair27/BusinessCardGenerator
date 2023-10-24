import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState, useContext} from 'react';
import InputField from '../Components/ui/InputField';
import Button from '../Components/ui/Button';
// import PopupModal from '../Components/PopupModal';
import {userContext} from '../Context/QRdataContext';
import QRcode from '../Components/ui/QRcode';
const Home = () => {
  const {addUsers, usersAdded} = useContext(userContext);
  const [qrVisible, SetQrVisible] = useState(false);
  const [personData, setPersonData] = useState({
    name: {title: 'Name', value: ''},
    number: {title: '74104 10123', value: ''},
    company_name: {title: 'Company Name', value: ''},
    Email: {title: 'Email', value: ''},
    website: {title: 'Website', value: ''},
    city: {title: 'City', value: ''},
  });

  //handles opening and closing of modal
  const onPressQrButton = () => {
    SetQrVisible(!qrVisible);
  };

  //This code handles the change in input values and adds it to personData
  const handleInputChange = (key, text) => {
    setPersonData({
      ...personData,
      [key]: {...personData[key], value: text},
    });
    SetQrVisible(false);
  };

  //QR visisble on modal change
  const dataForQRCreation = () => {
    const qrData = JSON.stringify(personData);
    return <QRcode value={qrData} />;
  };
  const onSaveUser = () => {
    addUsers(personData);
  };

  const onClickClear = () => {
    setPersonData({
      name: {title: 'Name', value: ''},
      number: {title: '74104 10123', value: ''},
      company_name: {title: 'Company Name', value: ''},
      Email: {title: 'Email', value: ''},
      website: {title: 'Website', value: ''},
      city: {title: 'City', value: ''},
    });
    SetQrVisible(false);
  };

  return (
    <View style={styles.body}>
      <View style={styles.topFields}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text style={styles.headerText}>Business Card</Text>
          <View style={styles.clearButtonContainer}>
            <TouchableOpacity onPress={() => onClickClear()}>
              <Text style={{color: '#007afe'}}>Clear</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Image
          source={require('../Assets/Images/image2.png')}
          resizeMode="contain"
          style={{height: '50%', borderRadius: 50, width: '35%'}}
        />
        <View style={{...styles.button, width: '80%', height: '25%'}}>
          <Button placeHolder="Choose Profile" backGroundColor={'#007afe'} />
        </View>
      </View>
      <View style={styles.inputBody}>
        <View style={styles.inputField}>
          {Object.keys(personData).map(keys => {
            return (
              <View key={keys} style={styles.eachInput}>
                <InputField
                  keyProps={keys}
                  placeHolder={personData[keys].title}
                  value={personData[keys].value}
                  onValueChange={handleInputChange}
                />
              </View>
            );
          })}
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                placeHolder="QR"
                backGroundColor={'#d95e54'}
                onPress={onPressQrButton}
              />
            </View>
            <View style={styles.button}>
              <Button
                placeHolder="Save"
                backGroundColor={'#d95e54'}
                onPress={onSaveUser}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={{flex: 1, justifyContent: 'center'}}>
        {qrVisible ? dataForQRCreation() : null}
      </View>
    </View>
  );
};

export default Home;

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffe9ec',
  },
  topFields: {
    // borderWidth: 1,
    flex: 1.1,
    width: '80%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  inputBody: {
    // borderWidth: 1,
    width: '78%',
    flex: 2,
  },
  clearButtonContainer: {
    position: 'absolute',
    left: WIDTH / 2.2,
  },
  eachInput: {
    height: '10%',
    marginVertical: '2.2%',
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: 'lightgray',
    backgroundColor: 'white',
  },

  headerText: {
    fontSize: 20,
    color: 'black',
    fontWeight: '700',
  },
  buttonContainer: {
    // borderWidth: 1,
    flexDirection: 'row',
    marginTop: '5%',
    width: '100%',
    justifyContent: 'space-between',
  },
  button: {
    width: '30%',
    height: '30%',
  },
});
