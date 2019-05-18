import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import firebase from 'firebase';

export default class NewJobScreen extends React.Component {

    state = ({
        title : '',
        location : '',
        description : '',
        error: '',
        userid: firebase.auth().currentUser.uid,
    });

    publishRequest(){
      const {title, location, description, userid} = this.state;
      var requestRef = firebase.database().ref('requests');
      var newRequest = requestRef.push();
      newRequest.set({
        'userid': userid,
        'title': title,
        'location': location,
        'description': description,
      });
    }
    
    render() {
        return (
        <View style={styles.container}>   
          <View style={styles.loginContainer} >
            <View style={styles.headerContainer}>
              <Text style={styles.header}>Add new request</Text>
            </View>
            <TextInput 
                style={styles.input}
                placeholder='Title' 
                onChangeText= {(title)=> this.setState({title})}
            />

            <TextInput 
                style={styles.input}
                placeholder='Location' 
                onChangeText= {(location)=> this.setState({location})}
            />    

            <TextInput 
                style={styles.inputDesc}
                placeholder='Description' 
                onChangeText= {(description)=> this.setState({description})}
            />   

            <Text>{this.state.error}</Text>

            <View style={styles.loginContainer}>
              <TouchableOpacity style={styles.loginItem}>
                <Text onPress={()=> this.publishRequest()} 
                style={{textAlign:'center', fontSize: 18, color:'#ddd'}}>Publish Request </Text>
              </TouchableOpacity>
           </View>

          </View>
        </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      backgroundColor: '#fff',
      height:'100%'
    },
    loginContainer : {
      margin: 30,
    },
    loginItem : {
      padding: 20,
      borderRadius: 40,
      borderWidth: 1,
      borderColor: '#ddd'
    },
    headerContainer : {
      marginTop: 30,
      marginBottom: 50,
    },
    header : {
      fontWeight: 'bold',
      fontSize: 18,
      textAlign: 'center', 
    },
    input: {
      backgroundColor: '#fff',
      borderRadius: 0,
      borderWidth: 0,
      borderBottomColor: '#ddd',
      borderBottomWidth: StyleSheet.hairlineWidth,
      marginBottom: 20
    },
    inputDesc : {
      backgroundColor: '#fff',
      borderRadius: 0,
      borderWidth: 0,
      borderBottomColor: '#ddd',
      borderBottomWidth: StyleSheet.hairlineWidth,
      marginBottom: 20,
      height: 70,
    },
    bottomContainer : {
      width: '100%',
      position: 'absolute',
      bottom:0,
      
    },
    bottomItem : {
      width: '100%',
      backgroundColor : 'blue',
      height:50,
      justifyContent: 'center'
    },
    signUpItem : {
      textAlign:'center',
      justifyContent:'center'
      
    }
  });
  