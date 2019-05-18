import React from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text, TextInput,
  View,
} from 'react-native';

import firebase from 'firebase'

const { width, height } = Dimensions.get("window");

export default class EditProfileScreen extends React.Component {

    render() {
        return (
        <View style={styles.appContainer}>
          <Text style={styles.header}>Personal information</Text>
          <View
          style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 5
          }}
          >
            <View style={styles.profileImage} >

            </View>

            <TextInput
              style={styles.input}
              placeholder='this.state.name'
              onChangeText= {(name)=> this.setState({name})}
            />

            <TextInput
              style={styles.input}
              placeholder='this.state.email'
              onChangeText= {(email)=> this.setState({email})}
            />




          </View>
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

  header : {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },

  profileImage: {
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: width * 0.5,
    borderWidth: 1,
    marginRight: 10
  },

  input: {
    backgroundColor: '#fff',
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: '#ddd',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 20
  },

  container: {
    flex: 1,
  },

  
});