import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {RootStackParamList} from '../AppRoot';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type LoginScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <Text>Login</Text>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
