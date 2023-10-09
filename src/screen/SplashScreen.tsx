import React, {useEffect} from 'react';
import {Image, StyleSheet, View} from 'react-native';

import {RootStackParamList} from '../AppRoot';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type SplashScreennProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

const SplashScreen: React.FC<SplashScreennProps> = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('LoginScreen');
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <View style={styles.centerContent}>
      <Image source={require('../assets/anime/animation_lneq6r9b_small.gif')} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  centerContent: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
