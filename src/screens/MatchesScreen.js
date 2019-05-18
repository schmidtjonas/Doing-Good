import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from 'react-native';
import firebase from 'firebase';
import { TouchableHighlight, TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import MatchPreview from '../components/MatchPreview';

export default class NewJobScreen extends React.Component {

  constructor(props){
    super(props);
    this.state = ({
      title : '',
      street : '',
      city: '',
      postcode: '',
      description : '',
      error: '',
      userid: firebase.auth().currentUser.uid,
      date: '',
    });
  }
    publishRequest(){
      const {title, city, street, postcode, date, description, userid} = this.state;
      var requestRef = firebase.database().ref('requests');
      var newRequest = requestRef.push();
      newRequest.set({
        'userid': userid,
        'title': title,
        'city': city,
        'street': street,
        'postcode': postcode,
        'date': date,
        'description': description,
      });
    }
    
    render() {
        return (
        <View style={styles.container}>   
          <View style={styles.loginContainer} >
            <View style={styles.headerContainer}>
              <Text style={styles.header}>My Matches</Text>
            </View>
            <ScrollView>
            <View style={styles.cardContainer}>
            <FlatList
                data={[1,2,3,4,5,6,7,8]}
                renderItem={({ item }) => (
                    <MatchPreview />
                )}
                keyExtractor={(item, index) => index}
            />
            </View>
            </ScrollView>

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
      marginTop: 10,
      marginBottom: 20,
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
      justifyContent:'center',
      
    },
    cardContainer : {
        
    }
  });
  