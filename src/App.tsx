import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import AppRoot from './AppRoot';

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      {/* <SafeAreaView
        style={{
          backgroundColor: 'white',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}> */}
      <StatusBar
        backgroundColor="white"
        barStyle="light-content"
        animated={true}
      />
      <AppRoot />
      {/* </SafeAreaView> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
