import React from 'react';
import firebase from 'firebase'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';

export default class SignUpScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = ({
            email : '',
            password : '',
            error: '',
            name: '',
        })
    }

    signUpUser = (email,password) => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((res) => { 
        firebase.database().ref('users/' + res.user.uid).set({
          name: this.state.name,
          email: email});
        this.props.navigation.navigate('Main')})
      .catch((err) => {
          this.setState({ error: 'Authentication failed.\n'+err });        
      });
    }
    
    render() {
        return (
        <View style={styles.container}>   
          <View style={styles.loginContainer} >
            <View style={styles.headerContainer}></View>
              <Text>DOING GOOD</Text>
            <TextInput 
                style={styles.input}
                placeholder='Email' 
                onChangeText= {(email)=> this.setState({email})}
            />

            <TextInput 
                style={styles.input}
                placeholder='Password' 
                secureTextEntry={true} 
                onChangeText= {(password)=> this.setState({password})}
            />      
            <TextInput 
              style={styles.input}
              placeholder='Name' 
              onChangeText= {(name)=> this.setState({name})}
            />    
            <Button 
                gradient title='Sign Up!'
                onPress = {()=> this.signUpUser(this.state.email, this.state.password)}>
            </Button>

            <Text>{this.state.error}</Text>

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
    input: {
      backgroundColor: '#fff',
      borderRadius: 0,
      borderWidth: 0,
      borderBottomColor: '#ddd',
      borderBottomWidth: StyleSheet.hairlineWidth,
      marginBottom: 20
    }
  });
  