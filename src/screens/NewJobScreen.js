import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';
import firebase from 'firebase';
import { TouchableHighlight, TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import DatePicker from 'react-native-datepicker';
import Colors from '../assets/Colors';

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
      this.props.navigation.navigate('Profile');
    }
    
    render() {
        return (
        <ScrollView>
        <View style={styles.container}>   
          <View style={styles.loginContainer} >
            <View style={styles.headerContainer}>
              <Text style={styles.header}>Add new Quest</Text>
            </View>
            <TextInput 
                style={styles.input}
                placeholder='Title' 
                onChangeText= {(title)=> this.setState({title})}
            />

            <TextInput 
                style={styles.input}
                placeholder='Location - Streetname' 
                onChangeText= {(street)=> this.setState({street})}
            />    

            <TextInput 
                style={styles.input}
                placeholder='Location - City' 
                onChangeText= {(city)=> this.setState({city})}
            />   

            <TextInput 
                style={styles.input}
                placeholder='Location - PostalCode' 
                onChangeText= {(postcode)=> this.setState({postcode})}
            />   

            <TextInput 
                style={styles.inputDesc}
                placeholder='Description - What do you need help' 
                onChangeText= {(description)=> this.setState({description})}
            />   
            <View style={{alignItems:'center'}}>
                <DatePicker
                    style={{width: 200}}
                    date={this.state.date} //initial date from state
                    mode="date" //The enum of date, datetime and time
                    placeholder="Select Date"
                    format="DD-MM-YYYY"
                    minDate="19-05-2019"
                    maxDate="01-01-2029"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                        },
                        dateInput: {
                        borderRadius:10,
                        marginLeft: 36
                        }
                    }}
                    onDateChange={(date) => {this.setState({date: date})}}
                    />
            </View>
           

            <Text>{this.state.error}</Text>

            <View style={styles.loginContainer}>
              <TouchableOpacity style={styles.loginItem}>
                <Text onPress={()=> this.publishRequest()} 
                style={{textAlign:'center', fontSize: 18, color:Colors.weldonBlue}}>Publish Quest </Text>
              </TouchableOpacity>
           </View>

          </View>
        </View>
        </ScrollView>
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
      marginBottom: 50,
    },
    header : {
      fontWeight: 'bold',
      fontSize: 18,
      textAlign: 'center', 
      color: Colors.weldonBlue,
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
      
    }
  });
  