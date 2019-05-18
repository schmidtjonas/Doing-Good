import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import * as firebase from 'firebase';
import AppNavigator from './src/navigation/AppNavigator';

export default class App extends Component {

  componentWillMount(){
    if (!firebase.apps.length) {
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
  }

  render() {
    return (
        <AppNavigator/>
    );
  }
}
