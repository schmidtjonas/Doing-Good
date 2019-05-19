import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';


import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import NewJobScreen from '../screens/NewJobScreen';
import MatchesScreen from '../screens/MatchesScreen';
import Colors from '../assets/Colors';
import QuestFocusScreen from '../screens/QuestFocusScreen';

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
  Edit: {
    screen : EditProfileScreen,
  }
});

const NewJobStack = createStackNavigator({
  Create: {
      screen : NewJobScreen,
      navigationOptions: {
        header: null,
    },
  },
});

const MatchesStack = createStackNavigator({
  Matches: {
      screen : MatchesScreen,
      navigationOptions: {
        header: null,
      },
  },
  Quest: {
    screen: QuestFocusScreen,
  }
});

export default createBottomTabNavigator(
  {
  Home: HomeStack,
  Matches: MatchesStack,
  AddQuest: NewJobStack,
  Profile: ProfileStack,
  
},{
  tabBarOptions: {
    activeTintColor: Colors.weldonBlue,
  },
});
