import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

import React from 'react';

const InfoCards = ({item, onClick}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        onClick();
      }}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.headerText}>ID card</Text>
        </View>
        <View style={styles.content}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.position}>Software Engineer</Text>
            <Text style={styles.idNumber}>Tel: {item.number}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default InfoCards;
const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  card: {
    width: '85%',
    height: '95%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    backgroundColor: '#FF7377',
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  headerText: {
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 10,
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  position: {
    fontSize: 14,
    marginBottom: 5,
  },
  idNumber: {
    fontSize: 12,
    color: '#777777',
  },
  holderContainer: {
    backgroundColor: '#e0e0e0',
    padding: 5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  holderText: {
    color: '#333333',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 12,
  },
});
