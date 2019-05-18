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
    
    render() {
        return (
        <View style={styles.container} behavior="padding">
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

        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      backgroundColor: '#fff',
    },
    contentContainer: {
    },
    getStartedContainer: {
      alignItems: 'center',
      marginHorizontal: 50,
    },
    headerContainer : {
      width: 100 + "%",
      height: 90,
      backgroundColor: '#F5FCFF',
    },
    hasErrors: {
      backgroundColor: '#EAEB5E',
    },
    input: {
      backgroundColor: '#fff',
      borderRadius: 0,
      borderWidth: 0,
      borderBottomColor: '#ddd',
      borderBottomWidth: StyleSheet.hairlineWidth,
    }
  });
  