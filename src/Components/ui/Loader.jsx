import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import QRcode from '../../Assets/Images/qr-code.svg';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
} from 'react-native-reanimated';
const Loader = () => {
  const offset = useSharedValue(150);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{translateY: offset.value}],
  }));
  React.useEffect(() => {
    offset.value = withRepeat(
      withTiming(-offset.value, {duration: 1500}),
      -1,
      true,
    );
  }, []);
  return (
    <View style={styles.body}>
      <QRcode style={styles.svg} />
      <Text
        style={{
          position: 'absolute',
          bottom: '10%',
          fontSize: 30,
          color: 'gray',
        }}>
        Loading ...
      </Text>
      <Animated.View style={[styles.box, animatedStyles]} />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#DBE9FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  svg: {
    width: '70%',
    height: '30%',
  },
  box: {
    position: 'absolute',
    alignSelf: 'center',
    width: '70%',
    height: '2%',
    backgroundColor: '#D94A23',
  },
});
