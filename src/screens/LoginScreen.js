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
            password : ''
        })
    }

    loginUser = (email,password) => {
        try{
            firebase.auth().signInWithEmailAndPassword(email,password).then(() => this.props.navigation.navigate('Main'));
        }catch(error){
            console.log(error.toString());
        }
        
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
  