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

import JobPreview from '../components/JobPreview';

const { width, height } = Dimensions.get("window");

export default class ProfileScreen extends React.Component {

  constructor(props){
    super(props);
    this.state = ({
      user: firebase.auth().currentUser,
      name: '',
    })
  }


  renderHeader = () => {
    const { user } = this.state;
    const imageUrl = 'https://www.welt.de/img/vermischtes/mobile166641813/3792501637-ci102l-w1024/CRESTED-BLACK-MACAQUE.jpg';
    return (
    <View style={styles.headerWrapper}>
      <View style={{ marginTop: 10, paddinTop: 20, flexDirection: "row" }}>
        <View style={styles.profileImage} >
            
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: 5
          }}
        >
          <View style={{ flexDirection: "row", flex: 1 }}>
            <View style={{ flex: 2, alignItems: "center" }}>
              <Text>390</Text>
              <Text>Karmapoints</Text>
            </View>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Text>5 Sterne</Text>
            </View>
          </View>
          <View
            style={{
              borderWidth: 1,
              width: "100%",
              marginLeft: 1,
              alignItems: "center",
              borderRadius: 5,
            }}
          >
            <Text>Edit Profile</Text>
          </View>
        </View>
        
      </View>
        
    </View>  
    );
  };

  renderJobPreview({ item }){
      return <JobPreview/>;
  }

  returnKey(item){
      return item.toString();
  }

  render() {
    //if abfrage ob eigene anfragen ansonsten keine akriven anzeigen
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        <ScrollView style={styles.listContainer}>
        <View style={styles.infoField}>
            <Text style={{fontSize: 14, fontWeight:'bold'}}>Hier der Username</Text>
            <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet </Text>
        </View>
        <FlatList
          data = {[1,2,3,4,5,6,7,8,9,10]}
          keyExtractor={this.returnKey}
          renderItem={this.renderJobPreview}
        />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },

  gridImgContainer: {
    padding: 1,
    backgroundColor: "#CCC"
  },
  profileImage: {
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: width * 0.5,
    borderWidth: 1,
    marginRight: 10
  },
  image: {
    height: width * 0.33,
    width: width * 0.33
  },
  headerWrapper : {
      marginTop:20,
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 10,
  },
  listContainer : {
    flex: 1,
  },
  infoField : {
    padding:20,
    paddingBottom: 10,
    borderBottomColor :'grey',
    borderBottomWidth:1,
  }
});