import React from 'react';
import {
  Button,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text, TextInput,
  View,
} from 'react-native';
import Slider from '@react-native-community/slider';
import Colors from '../assets/Colors';
import firebase from 'firebase'
import { ForceTouchGestureHandler } from 'react-native-gesture-handler';
import SplashScreen from '../components/SplashScreen'
import {TouchableOpacity} from "react-native-gesture-handler";
const { width, height } = Dimensions.get("window");

export default class EditProfileScreen extends React.Component {

  constructor(props){
    super(props);
    this.state = ({
      userid: firebase.auth().currentUser.uid,
      email : '',
      name: '',
      password : '',
      error: '',
      loading: true,
      distance: 0
    })
  }

  componentDidMount() {
    const {userid} = this.state;
    firebase.database().ref('users/').child(userid).once('value')
      .then((snapshot) => {
        this.setState({
          name: snapshot.child('name').val(),
          email: snapshot.child('email').val(),
          description: snapshot.child('description').val(),
          distance: snapshot.child('distance').val(),
          loading: false,
        })
      });
  }

  saveChanges() {
    const {userid} = this.state;
    firebase.database().ref('users/').child(userid).set({
      name: this.state.name,
      email: this.state.email,
      description: this.state.description,
      distance: this.state.distance,
    })
      .then((data) => this.props.navigation.pop())
      .catch((err) => this.setState({error: ''+err}))
  }

  render() {
      if (this.state.loading) {
        return <SplashScreen/>;
      }
      return (
        <View style={styles.container}>
          <View style={styles.loginContainer} >
            <View style={styles.headerContainer}>
              <Text style={styles.header}>Personal information</Text>
            </View>
            <Text>Name</Text>
            <TextInput
              style={styles.input}
              color='#b8d8d8'
              defaultValue={'' + this.state.name}
              onChangeText= {(name)=> this.setState({name})}
            />
            <Text>Email</Text>
            <TextInput
              style={styles.input}
              defaultValue={'' + this.state.email}
              onChangeText= {(email)=> this.setState({email})}
            />

            <Text>Description</Text>
            <TextInput
              style={styles.input}
              defaultValue={'' + this.state.description}
              onChangeText= {(description)=> this.setState({description})}
            />

            <Text>Distance to project</Text>
            <Slider
              style={{height: 40}}
              minimumValue={1}
              maximumValue={200}
              value={this.state.distance}
              step={1}
              maximumTrackTintColor="#000000"
              onValueChange={value => this.setState({distance: value})}
            />
            <Text>{this.state.distance} km</Text>

            <Text>{this.state.error}</Text>

            <View style={styles.loginContainer}>
              <TouchableOpacity style={styles.loginItem}>
                <Text onPress={()=> this.saveChanges()}
                      style={{textAlign:'center', fontSize: 18, color:'#ddd'}}>Save!</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  backgroundColor: {color: '#b8d8d8'},
  container : {
    flex: 1,
    width: '100%',
    height:'100%'
  },
  loginContainer : {
    margin: 10,
  },

  loginItem : {
    padding: 20,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#ddd'
  },

  headerContainer : {
    width: 100 + "%",
    height: 40,
    marginTop:25,
    paddingBottom: 20,
    backgroundColor: Colors.weldonBlue,
  },

  header : {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    backgroundColor: Colors.sunsetOrange,
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
    marginBottom: 10
  },

  entryTitle : {
    color: '#000',
    fontSize: 18,
    textAlign: 'left',
  },
  
});