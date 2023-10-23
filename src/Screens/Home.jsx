import {StyleSheet, Text, View, Image, StatusBar} from 'react-native';
import React, {useState, useContext} from 'react';
import InputField from '../Components/ui/InputField';
import Button from '../Components/ui/Button';
import PopupModal from '../Components/PopupModal';
import {userContext} from '../Context/QRdataContext';
const Home = () => {
  const {addUsers, usersAdded} = useContext(userContext);
  const [modalVisible, SetModalVisible] = useState(false);
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
    SetModalVisible(!modalVisible);
  };

  //This code handles the change in input values and adds it to personData
  const handleInputChange = (key, text) => {
    setPersonData({
      ...personData,
      [key]: {...personData[key], value: text},
    });
  };

  //QR visisble on modal change
  const dataForQRCreation = () => {
    const qrData = JSON.stringify(personData);
    return (
      <PopupModal
        visible={modalVisible}
        onPress={onPressQrButton}
        value={qrData}
      />
    );
  };
  const onSaveUser = () => {
    addUsers(personData);
  };

  return (
    <View style={styles.body}>
      <StatusBar backgroundColor={'#f2f1f6'} />
      {dataForQRCreation()}

      <View style={styles.topFields}>
        <Text style={styles.headerText}>Business Card</Text>

        <Image
          source={require('../Assets/Images/image2.png')}
          resizeMode="contain"
          style={{height: '50%', borderRadius: 50, width: '47%'}}
        />
        <Button
          placeHolder="Choose Profile"
          width={'100%'}
          backGroundColor={'#007afe'}
        />
      </View>
      <View style={styles.inputField}>
        {Object.keys(personData).map(keys => {
          return (
            <InputField
              key={keys}
              keyProps={keys}
              placeHolder={personData[keys].title}
              value={personData[keys].value}
              onValueChange={handleInputChange}
            />
          );
        })}

        <View
          style={{
            ...styles.inputField,
            flexDirection: 'row',
            width: '100%',
            marginTop: '5%',

            justifyContent: 'space-between',
          }}>
          <Button
            placeHolder="QR"
            width={'30%'}
            backGroundColor={'#d95e54'}
            onPress={onPressQrButton}
          />
          <Button
            placeHolder="Save"
            width={'30%'}
            backGroundColor={'#d95e54'}
            onPress={onSaveUser}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
  },
  inputField: {
    // borderWidth: 1,
    width: '78%',
    flex: 2.5,
    marginTop: '5%',
  },
  topFields: {
    // borderWidth: 1,
    flex: 1,
    width: '60%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    color: 'black',
    fontWeight: '700',
  },
});
