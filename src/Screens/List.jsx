import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {userContext} from '../Context/QRdataContext';
import PopupModal from '../Components/PopupModal';
const List = () => {
  // const imageStatic = require('../Assets/Images/demoimage.png');

  const {addUsers, usersAdded} = useContext(userContext);
  const [modalVisible, SetModalVisible] = useState(false);
  const [currentUser, setCurrentUser] = useState();

  const onPressQrButton = element => {
    SetModalVisible(!modalVisible);
    setCurrentUser(element);
  };

  //QR visisble on modal change
  const dataForQRCreation = () => {
    const qrData = JSON.stringify(currentUser);
    console.log(qrData);
    return (
      <PopupModal
        visible={modalVisible}
        onPress={onPressQrButton}
        value={qrData}
        size={200}
      />
    );
  };

  return (
    <ScrollView style={styles.body}>
      {/* {dataForQRCreation()}

      {usersAdded.map(element => {
        console.log(element);
        return (
          <TouchableOpacity
            key={element.name.value}
            style={styles.buttonBody}
            onPress={() => onPressQrButton(element)}>
            <Text style={{color: 'black'}}>{element.name.value}</Text>
            {console.log(element.profilePic)}
            <Image
              source={
                element.profilePic ? {uri: element.profilePic} : imageStatic
              }
              resizeMode="contain"
              style={{height: '90%', width: '20%', borderRadius: 50}}
            />
          </TouchableOpacity>
        );
      })} */}
    </ScrollView>
  );
};

export default List;
const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#f2f1f6',
    padding: 15,
  },
  buttonBody: {
    borderBottomWidth: 1,
    flex: 1,
    // width: WIDTH,
    height: HEIGHT * 0.1,
    borderBottomColor: 'lightgray',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
