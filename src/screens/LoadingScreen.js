import React, { Component } from 'react';
import { StyleSheet, View, Button, Text} from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';
import LottieView from 'lottie-react-native';

export default class Loader extends React.Component{
    constructor(props){
        super(props);
        this.state = { visible : false}
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                visible: !this.state.visible
            });
        }, 30000)
    }

    render(){
        const{ visible } = this.state;
        return(
            <AnimatedLoader
                visible = {visible}
                overlayColor="rgba(255, 255, 255, 0.75"
                source={require("")}
                animationStyle={StyleSheet.lottie}
                speed={1}
            />
        );
    }
}

const styles= StyleSheet.create({
    lottie:{
        width:100,
        height: 100
    }
});