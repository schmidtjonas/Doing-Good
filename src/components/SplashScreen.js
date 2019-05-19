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
      return (
        <View>
          <Text style={{marginTop: 300,
                        textAlign: "center",
                        fontFamily: "Roboto",
                        fontSize: 24,}}>
            Loading, please wait.
          </Text>
        </View>
      );
    }
  }
