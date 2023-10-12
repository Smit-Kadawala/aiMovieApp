import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {RootStackParamList} from '../AppRoot';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import CustomTextInput from '../component/CustomTextInput';
import CustomeButton from '../component/CustomeButton';

type LoginScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text>Login Screen</Text>
      </View>
      <CustomTextInput placeholder="Enter your EmailID" />
      <CustomTextInput
        placeholder="Enter your Password"
        secureTextEntry={true}
      />
      <CustomeButton btnText={`btn`} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
