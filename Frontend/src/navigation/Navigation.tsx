import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREENS } from '../utils/routes';
import Splash from '../screens/Splash';
import Home from '../screens/Home';
import { navigationRef } from '../utils/navigationService';

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
    <Stack.Screen name={SCREENS.Home} component={Home} />
   </Stack.Navigator>
  </NavigationContainer>
 )
}

export default Navigation