import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';
import AppRoot from './AppRoot';
import {Store} from './redux/Store/apiStore';

export default function App(): JSX.Element {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <StatusBar
          backgroundColor="white"
          barStyle="light-content"
          animated={true}
        />
        <AppRoot />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({});
