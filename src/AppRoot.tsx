import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './screen/SplashScreen';
import LoginScreen from './screen/LoginScreen';

export type RootStackParamList = {
  SplashScreen: undefined;
  LoginScreen: any;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppRoot = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{
          headerShown: false, // This line hides the header for the Home screen
        }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppRoot;
