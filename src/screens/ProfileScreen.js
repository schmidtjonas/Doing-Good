import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  Image
} from "react-native";

const { width, height } = Dimensions.get("window");

export default class ProfileScreen extends React.Component {



  renderHeader = () => {
    const imageUrl = 'https://www.welt.de/img/vermischtes/mobile166641813/3792501637-ci102l-w1024/CRESTED-BLACK-MACAQUE.jpg';
    return (
      <View style={{ padding: 20, flexDirection: "row" }}>
        <View style={styles.profileImage} />

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
    );
  };


  render() {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
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
  }
});