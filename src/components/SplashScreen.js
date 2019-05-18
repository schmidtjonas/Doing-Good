import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';
import React from 'react';

export default class SplashScreen extends React.Component {
    render() {
      const textStyles = {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold'
      };
  
      return (
        <View >
          <Text style={textStyles}>
            Splash Screen
          </Text>
        </View>
      );
    }
  }