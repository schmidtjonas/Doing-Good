import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import firebase from 'firebase'

export default class EditProfileScreen extends React.Component {

    render() {  
        return (
        <View style={styles.appContainer}>
            <Text>Hello</Text>
        </View>
        );
    }
}

const styles = StyleSheet.create({
  appContainer : {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    height:'100%'
  },
  headerContainer : {
    width: 100 + "%",
    height: 120,
    marginTop:25,
    paddingBottom: 20,
  },
  container: {
    flex: 1,
  },

  
});