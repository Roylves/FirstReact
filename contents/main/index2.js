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
  TouchableOpacity,
  Text,
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

            <TouchableOpacity 
                  style={styles.buttonContainer}
                  onPress={() => this.navigate('page2')}>
                      <Text style={styles.buttonText}>Signing In</Text>
            </TouchableOpacity>

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
  buttonContainer: {
    backgroundColor:'goldenrod',
    paddingVertical:10,
    marginTop:10,
    borderRadius:10,
  },
  buttonText: {
    textAlign:'center',
    color: '#FFFFFF',
    fontWeight:'900',
    fontSize:20,
  },
  pushContainer: {
    flexDirection:'row',
    flexWrap:'wrap',
    marginTop:10,
  },
  pushText: {
    textAlign:'left',
    color: 'grey',
    fontSize:18,
  },
  pushText2: {
    textAlign:'right',
    color: 'grey',
    fontSize:18,
  },
});