import React from 'react';
import {
  Button,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text, TextInput,
  View,
} from 'react-native';

import firebase from 'firebase'
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
      loading: true
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
          loading: false,
        })
      });
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
            <TextInput
              style={styles.input}
              defaultValue={'' + this.state.name}
              onChangeText= {(name)=> this.setState({name})}
            />

            <TextInput
              style={styles.input}
              defaultValue={'' + this.state.email}
              onChangeText= {(email)=> this.setState({email})}
            />
            <Text>{this.state.error}</Text>

            <View style={styles.loginContainer}>
              <TouchableOpacity style={styles.loginItem}>
                <Text onPress={()=> this.loginUser(this.state.email, this.state.password)}
                      style={{textAlign:'center', fontSize: 18, color:'#ddd'}}>Login! </Text>
              </TouchableOpacity>
            </View>

            <Button
              gradient title='Home!'
              onPress = {()=> {
                firebase.auth().signInWithEmailAndPassword('test@test.de','123456');
                this.props.navigation.navigate('Main');
              }}>
            </Button>
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
    marginBottom: 10
  },

  entryTitle : {
    color: '#000',
    fontSize: 18,
    textAlign: 'left',
  },
  
});