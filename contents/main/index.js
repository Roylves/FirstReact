/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Navigator,
} from 'react-native';
import LoginForm from './LoginForm';
import ConnectForm from './ConnectForm';


export default class Main extends Component {
  constructor(){
    super();

    this.navigate = this.navigate.bind(this)
  }

  navigate(name) {
    this.props.navigator.push({
      name
    })
  }

  render() {
    return (
      <KeyboardAvoidingView behaviour="padding" style={styles.container}>
        <View style={styles.logonContainer}>
          <Image 
            style={styles.logo} 
            source={require('./../img/cps.png')}
            resizeMode="contain"
            />
        </View>
        <View style={styles.formContainer}>
          <LoginForm />
        </View>

        <View style={styles.formContainer2}>
          <ConnectForm />
        </View>
      </KeyboardAvoidingView>
    )    
  }    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  logonContainer: {
    flexDirection:'row',
    flexGrow:1,
  },
  logo: {
    flexShrink:1,
    marginHorizontal:50,
  },
  formContainer: {
  },
  formContainer2: {
    marginBottom:60,
  },
  title: {
    color:'#FFF',
    marginTop:10,
    width:160,
    textAlign:'center',
    opacity:0.9,
  },
});