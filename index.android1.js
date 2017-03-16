/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import LoginForm from './contents/main/LoginForm';
import ConnectForm from './contents/main/ConnectForm';


export default class AwesomeProject extends Component {
  render() {
    return (
      <KeyboardAvoidingView behaviour="padding" style={styles.container}>
        <View style={styles.logonContainer}>
          <Image 
            style={styles.logo} 
            source={require('./contents/img/cps.png')}
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

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);