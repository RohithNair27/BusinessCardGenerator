import {StyleSheet, Text, View, StatusBar, Modal, Image} from 'react-native';
import React, {useContext} from 'react';
import {useIsFocused} from '@react-navigation/native';
import QRcode from './ui/QRcode';
import youngman from '../Assets/Images/youngman.png';
import Button from './ui/Button';

const QRModal = ({onClick, data, status}) => {
  const isFocused = useIsFocused();
  console.log(data);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={status}
      useNativeDriver={true}
      onRequestClose={onClick}
      animationIn={'slideInUp'}
      animationOut={'slideOutDown'}>
      {isFocused ? <StatusBar backgroundColor={'white'} /> : null}

      <View style={styles.centeredView}>
        <View style={styles.qrview}>
          <View style={styles.idCard}>
            <View style={styles.header}>
              <Image
                source={youngman}
                style={{
                  // borderWidth: 1,
                  width: '30%',
                  height: '70%',
                  borderWidth: 10,
                  padding: 20,
                  borderRadius: 15,
                }}
              />
              <View style={styles.headerTextContainer}>
                <View>
                  <Text style={{...styles.label, color: 'black'}}>
                    Fullname
                  </Text>
                  <Text
                    numberOfLines={2}
                    ellipsizeMode="tail"
                    style={{
                      fontSize: 20,
                      color: 'white',
                      fontWeight: 'bold',
                    }}>
                    {data?.name}
                  </Text>
                </View>
                <View>
                  <Text style={[styles.label, {color: 'black'}]}>Position</Text>
                  <Text
                    numberOfLines={2}
                    ellipsizeMode="tail"
                    style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
                    {data?.profession}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.body}>
              <View style={[styles.id]}>
                <Text style={styles.label}>Company name</Text>
                <Text style={styles.value}>{data?.company_name}</Text>
              </View>
              <View style={[styles.id]}>
                <Text style={styles.label}>Position</Text>
                <Text style={styles.value}>Senior Software Engineer</Text>
              </View>
              <View style={[styles.id]}>
                <Text style={styles.label}>Phone NO.</Text>
                <Text style={styles.value}>{data?.number}</Text>
              </View>
              <View style={[styles.id]}>
                <Text style={styles.label}>E-mail</Text>
                <Text style={styles.value}>{data?.email}</Text>
              </View>
              <View style={[styles.id]}>
                <Text style={styles.label}>Country</Text>
                <Text style={styles.value}>{data?.city}</Text>
              </View>
              <View style={[styles.id]}>
                <Text style={styles.label}>Connected Date</Text>
                <Text style={[styles.value, {color: 'rgb(61,190,139)'}]}>
                  {data?.Time}
                </Text>
              </View>
            </View>
            <View style={styles.footer}>
              <QRcode size={150} peronsalInfo={data} />
              <Button
                placeHolder={'Close'}
                backgroundColor={'#FF7377'}
                width={'70%'}
                height={'15%'}
                textColor={'#fff'}
                onPress={() => onClick()}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default QRModal;

const styles = StyleSheet.create({
  centeredView: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  qrview: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },
  idCard: {
    flex: 1,
    width: '100%',
    borderRadius: 10,
  },
  header: {
    flex: 1.6,
    borderRadius: 15,
    width: '90%',
    backgroundColor: '#FF7377',
    padding: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  headerTextContainer: {
    // borderWidth: 1,
    maxWidth: '60%',
    maxHeight: '100%',
    paddingLeft: 10,
  },
  body: {
    flex: 2,
    width: '95%',
    justifyContent: 'center',
    // alignItems: 'center',
    alignSelf: 'center',
    paddingLeft: 10,
    // borderWidth: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  name: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  textContainer: {
    // borderWidth: 1,
    height: '100%',
    width: '60%',
    justifyContent: 'space-evenly',
  },
  idContainer: {
    flexDirection: 'row',
  },
  value: {
    marginRight: 8,
    fontWeight: '500',
    fontSize: 15,
    marginBottom: 20,
  },
  label: {
    marginTop: 20,
    color: 'lightgray',
  },

  footer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  id: {
    // borderWidth: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    width: '45%',
    height: '40%',
  },
});
