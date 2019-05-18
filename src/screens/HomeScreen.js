import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import firebase from 'firebase';
import SplashScreen from '../components/SplashScreen';

class HomeScreen extends React.Component {

    constructor(props){
      super(props);
      this.state = ({
        userid: '',
        loading: true,
      });
    }

    componentDidMount() {
        this.setState({ 
          userid: firebase.auth().currentUser.uid 
        })
    }

    render() {  
      if(this.state.loading){
        return <SplashScreen/>;
      }
        const { currentUser } = this.state;
        return (
        <View style={styles.appContainer}>
            <Text>Hello</Text>
        </View>
        );
    }
}

const styles = StyleSheet.create({
  appContainer : {
    flex: 1,
  },
  headerContainer : {
    width: 100 + "%",
    height: 120,
    marginTop:25,
    paddingBottom: 20,
  },
  container: {
    flex: 1,
  },

  
});


export default HomeScreen;