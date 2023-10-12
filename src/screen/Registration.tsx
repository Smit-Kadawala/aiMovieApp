import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {RootStackParamList} from '../AppRoot';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import CustomTextInput from '../component/CustomTextInput';

type Registration = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

const Registration: React.FC<Registration> = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text>Registration Screen</Text>
      </View>
      <CustomTextInput placeholder="Enter your EmailID" />
      <CustomTextInput
        placeholder="Enter your Password"
        secureTextEntry={true}
      />
    </View>
  );
};

export default Registration;

const styles = StyleSheet.create({});
