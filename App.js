/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import * as firebase from 'firebase';
import AppNavigator from './src/navigation/AppNavigator';

export default class App extends Component {

  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyBM_uen5b9n1ho0YwKILCTHORJHXeScVQA",
      authDomain: "doinggood.firebaseapp.com",
      databaseURL: "https://doinggood.firebaseio.com",
      projectId: "doinggood",
      storageBucket: "doinggood.appspot.com",
      messagingSenderId: "787451568515",
      appId: "1:787451568515:web:765a3a2d4773f99d"
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello</Text>
        <AppNavigator/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
