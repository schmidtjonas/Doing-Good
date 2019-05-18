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
import SplashScreen from '../components/SplashScreen';
import { TouchableOpacity } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

export default class ProfileScreen extends React.Component {

  constructor(props){
    super(props);
    this.state = ({
      userid: firebase.auth().currentUser.uid,
      name: '',
      karmapoints: 0,
      description: '',
      loading: true,
    })
  }

  componentDidMount() {
    const {userid} = this.state;
    firebase.database().ref('users/').once('value')
      .then((snapshot) => {
        this.setState({
          name: snapshot.child(userid).child('name').val(),
          karmapoints: snapshot.child(userid).child('karmapoints').val(),
          description: snapshot.child(userid).child('description').val(),
          loading: false,
      })
      });
  }

  renderHeader = () => {
    const { karmapoints } = this.state;
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
              <Text>{karmapoints}</Text>
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
            <TouchableOpacity>
              <Text onPress={() => {this.props.navigation.navigate('Edit')}}>Edit Profile</Text>
            </TouchableOpacity>
            
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
    if(this.state.loading){
      return <SplashScreen/>;
    }

    //if abfrage ob eigene anfragen ansonsten keine akriven anzeigen
    const { name, description } = this.state;
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        <ScrollView style={styles.listContainer}>
        <View style={styles.infoField}>
            <Text style={{fontSize: 14, fontWeight:'bold'}}>{ name }</Text>
            <Text>{description}</Text>
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
    paddingTop: 10,
    borderBottomColor :'grey',
    borderBottomWidth:1,
  },
  newRequest : {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    borderRadius: 15,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'grey',
    height: 150,
  },
  requestLeft : {
    justifyContent: 'center',
    backgroundColor: "#FFFFFF",
    flex: 1,

},
requestRight : {
    padding: 20,
    justifyContent: 'center',
    backgroundColor: "#FFFFFF",
    flex: 1,
},
});