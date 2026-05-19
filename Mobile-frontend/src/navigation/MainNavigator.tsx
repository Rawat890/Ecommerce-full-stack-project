import { Platform } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { SCREENS } from '../utils/routes';
import Home from '../modules/home';
import { BASIC_COLORS } from '../utils/colors';
import Account from '../modules/account';
import Categories from '../modules/categories';
import Cart from '../modules/cart';
import { scale } from 'react-native-size-matters';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  const count = 1;
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: BASIC_COLORS.active,
        tabBarInactiveTintColor: BASIC_COLORS.inactive,
        lazy: true,
        tabBarHideOnKeyboard: true,
        tabBarLabelStyle: {
          fontSize: scale(11)
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === SCREENS.Home) {
            iconName = focused ? 'home' : 'home-outline';
          }
          else if (route.name === SCREENS.Cart) {
            iconName = focused ? 'cart' : 'cart-outline';
          }
          else if (route.name === SCREENS.Categories) {
            iconName = focused ? 'grid' : 'grid-outline';
          }
          else if (route.name === SCREENS.Account) {
            iconName = focused ? 'person' : 'person-outline';
          }

          return (
            <Ionicons
              name={iconName}
              size={28}
              color={color}
            />
          );
        },
      })}
    >
      <Tab.Screen name={SCREENS.Home} component={Home} />
      <Tab.Screen name={SCREENS.Cart} component={Cart} options={{
        tabBarBadge: count > 0 ? count : undefined,
        tabBarBadgeStyle: {
          height: scale(12),
          width: scale(12)
        },
      }} />
      <Tab.Screen name={SCREENS.Categories} component={Categories} />
      <Tab.Screen name={SCREENS.Account} component={Account} />
    </Tab.Navigator>
  )
}

export default MainNavigator