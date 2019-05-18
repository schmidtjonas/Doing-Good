import React from 'react';
import firebase from 'firebase'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';

export default class LoginScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = ({
            email : '',
            password : '',
            error: '',
        })
    }

    loginUser = (email,password) => {
      firebase.auth().signInWithEmailAndPassword(email,password)
      .then(() => this.props.navigation.navigate('Main'))
      .catch((err) => this.setState({error: 'Login failed:\n' + err})) // err ist scheinbar kein String und kann alleine nicht dargestellt werden
        
    }

    onSignUp(){
      this.props.navigation.push('SignUp');
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

            <Button 
                gradient title='Login!'
                onPress = {()=> this.loginUser(this.state.email, this.state.password)}>
            </Button>
            <Button 
                gradient title='Sign Up!'
                onPress = {()=> {this.onSignUp()}}>
            </Button>
            <Text>{this.state.error}</Text>

            <Button 
                gradient title='Home!'
                onPress = {()=> {this.props.navigation.navigate('Main')}}>
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
    input: {
      backgroundColor: '#fff',
      borderRadius: 0,
      borderWidth: 0,
      borderBottomColor: '#ddd',
      borderBottomWidth: StyleSheet.hairlineWidth,
      marginBottom: 20
    }
  });
  