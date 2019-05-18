import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import firebase from 'firebase'

class HomeScreen extends React.Component {

    state = { currentUser: null }

    componentDidMount() {
        const { currentUser } = firebase.auth()
        this.setState({ currentUser })
    }

    render() {  
        state = { currentUser: null }
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