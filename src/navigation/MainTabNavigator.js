import React from 'react';
import { Platform , Icon} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';


import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import NewJobScreen from '../screens/NewJobScreen';
import MatchesScreen from '../screens/MatchesScreen';
import Colors from '../assets/Colors';

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
});

export default createBottomTabNavigator(
  {
  Home: HomeStack,
  Matches: MatchesStack,
  AddQuest: NewJobStack,
  Profile: ProfileStack,
},{
  tabBarOptions: {
    labelStyle:{
      fontFamily: 'Roboto',
      fontSize: 16,
      color: Colors.weldonBlue,
      textAlign:'center',
      justifyContent:'center',
      paddingBottom:10,
    }
  },
});
