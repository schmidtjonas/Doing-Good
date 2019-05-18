/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

import firebase from 'firebase';
import SplashScreen from '../components/SplashScreen';
import CardStack, { Card } from 'react-native-card-stack-swiper';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = ({
      userid: '',
      loading: true,
      keys: null,
      data: null,
    });
  }

  componentDidMount(){
    //const userid = firebase.auth().currentUser.uid;
    firebase.database().ref('requests').once('value')
    .then((snapshot) => {
      let data = snapshot.val();
      let keys = Object.keys(data);
      this.setState({data: data, keys: keys, loading: false});
    })
    //this.setState({userid});
  }

  renderCards(){
    const {data, keys} = this.state;
    console.log(keys);
    console.log(data)
    keys.forEach((key) => { console.log(data[key]); });

    var cards = keys.map(key => {
      return <Card style={[styles.card, styles.card1]} key={key}><Text> {''+data[key]} </Text></Card>;
    });

    return cards;
    
  }

  render() {
    const {loading, data, keys} = this.state;
    if(loading){
      return <SplashScreen/>;
    }
    return (
      <View style={{flex:1}}>
        <CardStack
          style={styles.content}

          renderNoMoreCards={() => <Text style={{fontWeight:'700', fontSize:18, color:'gray'}}>No more cards :(</Text>}
          ref={swiper => {
            this.swiper = swiper
          }}>
          {this.renderCards()}
          <Card style={[styles.card, styles.card1]}><Text style={styles.label}>Hi</Text></Card>
          <Card style={[styles.card, styles.card1]}><Text style={styles.label}>A</Text></Card>
          <Card style={[styles.card, styles.card2]}><Text style={styles.label}>B</Text></Card>
          <Card style={[styles.card, styles.card1]}><Text style={styles.label}>C</Text></Card>
          <Card style={[styles.card, styles.card2]}><Text style={styles.label}>D</Text></Card>
          <Card style={[styles.card, styles.card1]}><Text style={styles.label}>E</Text></Card>

        </CardStack>
        <View style={styles.footer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button,styles.red]} onPress={()=>{
              this.swiper.swipeLeft();
            }}>
              <Image source={require('../assets/red.png')} resizeMode={'contain'} style={{ height: 62, width: 62 }} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button,styles.orange]} onPress={() => {
              this.swiper.goBackFromLeft();
            }}>
              <Image source={require('../assets/back.png')} resizeMode={'contain'} style={{ height: 32, width: 32, borderRadius: 5 }} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button,styles.green]} onPress={()=>{
              this.swiper.swipeRight();
            }}>
              <Image source={require('../assets/green.png')} resizeMode={'contain'} style={{ height: 62, width: 62 }} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f2f2f2',
  },
  content:{
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card:{
    width: 320,
    height: 470,
    backgroundColor: '#FE474C',
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity:0.5,
  },
  card1: {
    backgroundColor: '#FE474C',
  },
  card2: {
    backgroundColor: '#FEB12C',
  },
  label: {
    lineHeight: 400,
    textAlign: 'center',
    fontSize: 55,
    fontFamily: 'System',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  footer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  buttonContainer:{
    width:220,
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  button:{
    shadowColor: 'rgba(0,0,0,0.3)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity:0.5,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
    zIndex: 0,
  },
  orange:{
    width:55,
    height:55,
    borderWidth:6,
    borderColor:'rgb(246,190,66)',
    borderWidth:4,
    borderRadius:55,
    marginTop:-15
  },
  green:{
    width:75,
    height:75,
    backgroundColor:'#fff',
    borderRadius:75,
    borderWidth:6,
    borderColor:'#01df8a',
  },
  red:{
    width:75,
    height:75,
    backgroundColor:'#fff',
    borderRadius:75,
    borderWidth:6,
    borderColor:'#fd267d',
  }
});