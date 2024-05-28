import {StyleSheet, Text, View, StatusBar, Dimensions} from 'react-native';
import React, {useState, useContext, useEffect, useRef} from 'react';
import InfoCards from '../Components/ui/InfoCards';
import {MasonryFlashList} from '@shopify/flash-list';
import InputField from '../Components/ui/InputField';
import {readAsyncData} from '../Utils/AsyncStorage';
import Loader from '../Components/ui/Loader';
import {PersonalDataContext} from '../Context/PersonalDataContext/DetailsDataContext';
import {userContext} from '../Context/QRdataContext';
import {useIsFocused} from '@react-navigation/native';
import QRModal from '../Components/QRModal';
import Confused from '../Assets/Images/confused.svg';

const Home = ({navigation, route}) => {
  const {isLoading, changeLoading} = useContext(userContext);
  const {peopleData, addData} = useContext(PersonalDataContext);
  const [text, setText] = useState('');
  const [modalStatus, setModalStatus] = useState(false);
  const isInitialRender = useRef(true);
  const [currentModalData, setCurrentModalData] = useState();
  const isFocused = useIsFocused();

  //this function is called when the app loads for first time
  const fetchDataFromLocal = async () => {
    const data = await readAsyncData();
    addData(data);
  };

  const onChangeText = (key, texts) => {
    setText(texts);
  };

  const onPressForModal = item => {
    setModalStatus(!modalStatus);
    setCurrentModalData(item);
  };
  const filteredData = peopleData.filter(element =>
    element.name.includes(text),
  );
  //this user effect will fatch the data at the new call
  useEffect(() => {
    if (isInitialRender.current) {
      fetchDataFromLocal();
      isInitialRender.current = false;
    }
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <View style={styles.body}>
      <StatusBar backgroundColor={'#103550'} />

      <QRModal
        onClick={onPressForModal}
        status={modalStatus}
        data={currentModalData}
      />

      <View style={styles.topFields}>
        <Text style={styles.headerText}>Good day</Text>
        <Text
          style={{
            ...styles.headerText,
            fontSize: 15,
            fontWeight: '400',
            paddingBottom: 26,
          }}>
          Unlock new doors, forge lasting ties
        </Text>
        <InputField
          width={'92%'}
          compulsory={false}
          height={'24%'}
          placeHolder={'search with name'}
          icon={'search'}
          onValueChange={onChangeText}
          value={text}
          keyProps={'no user'}
          paddingLeft="7%"
        />
      </View>
      <View
        style={[
          styles.inputBody,
          peopleData.length < 1 || filteredData.length < 1
            ? {alignItems: 'center', justifyContent: 'center'}
            : null,
        ]}>
        {peopleData.length < 1 || filteredData.length < 1 ? (
          <View
            style={{
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              width: '70%',
              height: '40%',
              justifyContent: 'space-around',
            }}>
            <Confused />

            <Text style={styles.subtext}>
              Oops! Your contact list is as empty as a ghost town. Let's fix
              that!
            </Text>
          </View>
        ) : (
          <MasonryFlashList
            renderItem={({item}) => (
              <InfoCards item={item} onClick={onPressForModal} />
            )}
            estimatedItemSize={50}
            data={filteredData}
            numColumns={2}
          />
        )}
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
    backgroundColor: '#DBE9FF',
  },
  topFields: {
    backgroundColor: '#103550',
    flex: 0.5,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 30,
  },
  header: {
    top: '10%',
    left: '10%',
    // borderColor: 'black',
  },
  headerText: {
    fontSize: 30,
    color: '#ffff',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  subtext: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 10,
  },
  navigateCard: {
    right: '5%',
    width: '60%',
    flexDirection: 'row',
    height: '35%',
    justifyContent: 'space-evenly',
    borderWidth: 1,
  },
  navigateEachCard: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
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
  navigationImage: {
    resizeMode: 'contain',
    width: '20%',
    height: '20%',
  },
  inputBody: {
    paddingTop: '2%',
    flex: 1,
    // borderWidth: 1,

    // height: HEIGHT * 0.45,
    width: '100%',
    // top: HEIGHT * 0.06,
    // borderWidth: 1,
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
  row: {
    borderWidth: 1,
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
