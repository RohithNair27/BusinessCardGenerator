import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useContext} from 'react';
import {termsAndConditions} from '../Constants/Terms&conditions';
import Button from '../Components/ui/Button';
import {PersonalDataContext} from '../Context/PersonalDataContext/DetailsDataContext';
const TermsAndConditions = ({navigation}) => {
  const {setTermsAgreed} = useContext(PersonalDataContext);
  const onPressAgree = () => {
    setTermsAgreed(true);
    navigation.navigate('New_Card');
  };
  const onPressReject = () => {
    setTermsAgreed(false);
    navigation.navigate('New_Card');
  };
  return (
    <ScrollView style={styles.body}>
      <Text>{termsAndConditions}</Text>
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 60,
          justifyContent: 'space-evenly',
        }}>
        <Button
          placeHolder={'Accept'}
          backgroundColor={'#FF7377'}
          width={'40%'}
          height={'25%'}
          textColor={'#fff'}
          onPress={() => onPressAgree()}
        />
        <Button
          placeHolder={'Reject'}
          backgroundColor={'#FF7377'}
          width={'40%'}
          height={'25%'}
          textColor={'#fff'}
          onPress={() => onPressReject()}
        />
      </View>
    </ScrollView>
  );
};

export default TermsAndConditions;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    padding: 20,
    marginBottom: 10,
  },
});
