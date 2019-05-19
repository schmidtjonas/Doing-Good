import React from "react";
import firebase from 'firebase';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import Colors from '../assets/Colors';

export default class QuestFocusScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = ({
          userid: '',
          loading: true,
          requests : null,
        });
      }

    componentDidMount(){
        firebase.database().ref('requests').once('value')
            .then((snapshot) => {
            this.setState({
                requests: snapshot.val(),
                loading: false,
            })
        });
    }
    
    render(){
    
        return(
            <View style={styles.container}>
                <View style={styles.topEl} >
                    <Image
                        source = {require('../assets/logo.png')} />
                </View>
                <View style={styles.bottomEl} >
                    
                    
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
    topEl : {
        width: '100%',
        height: '300',
        marginBottom: 20,
    },
    bottomAbs : {
        position: 'absolute',
        bottom : 0,
    }
});