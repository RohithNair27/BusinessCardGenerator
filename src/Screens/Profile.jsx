import {StyleSheet, Text, View, Image} from 'react-native';
import Button from '../Components/ui/Button';
import React from 'react';
import ProfilePic from '../Assets/Images/profile_drawer.svg';
// import QRModal from '../Components/QRModal';
import QRcode from '../Components/ui/QRcode';
const Profile = () => {
  const data = {
    Time: 'October 8, 2024',
    city: 'India',
    company_name: 'Hshshaha',
    email: 'Nair@gmail.com',
    name: 'Nair',
    number: '4664646444',
    profession: 'Hshshhsha',
    terms: false,
  };
  return (
    <View>
      <View style={styles.centeredView}>
        <View style={styles.qrview}>
          <View style={styles.idCard}>
            <View style={styles.header}>
              <ProfilePic />
              {/* <Image
                source={ProfilePic}
                style={{
                  // borderWidth: 1,
                  width: '30%',
                  height: '70%',
                  borderWidth: 10,
                  padding: 20,
                  borderRadius: 15,
                }}
              /> */}
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
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;

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
