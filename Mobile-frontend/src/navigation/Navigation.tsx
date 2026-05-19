import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREENS } from '../utils/routes';
import { navigationRef } from '../utils/navigationService';
import Splash from '../modules/onboard';
import MainNavigator from './MainNavigator';

const Stack = createNativeStackNavigator();
const Navigation = () => {
 return (
  <NavigationContainer ref={navigationRef}>
   <Stack.Navigator
   screenOptions={{
    headerShown: false
   }}
   initialRouteName={SCREENS.Splash}
   >
    <Stack.Screen name={SCREENS.Splash} component={Splash} />
    <Stack.Screen name={SCREENS.MainNavigator} component={MainNavigator} />
   </Stack.Navigator>
  </NavigationContainer>
 )
}

export default Navigation