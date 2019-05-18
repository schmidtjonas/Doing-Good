import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const HomeStack = createStackNavigator({
  Home: {
      screen : HomeScreen,
      navigationOptions: {
        header: null,
    },
  },
});


const ProfileStack = createStackNavigator({
  Profile: {
      screen : ProfileScreen,
      navigationOptions: {
        header: null,
    },
  },
});



export default createBottomTabNavigator({
  Home: HomeStack,
  Profile: ProfileStack,
});
