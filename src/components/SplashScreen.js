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
          <Text style={styles.text}>
            Loading, please wait.
          </Text>
        </View>
      );
    }
  }
const styles = StyleSheet.create({
  text:{
    textAlignVertical: 'center',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 24,
  }
});