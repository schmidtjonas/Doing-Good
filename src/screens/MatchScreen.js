import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from "react-native";
import Colors from "../assets/Colors";

export default class MatchScreen extends React.Component{


    render(){
        return(
            <View>
                <Text>{this.props.navigation.getParam('itemId')}</Text>
            </View>
        );
    }
}