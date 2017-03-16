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
  Text,
  View,
  Navigator,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';

export default class Page2 extends Component {
  render() {
    return (
      <KeyboardAvoidingView behaviour="padding" style={styles.container}>
    		<View style={styles.logonContainer}>
    			<Image 
            style={styles.logo} 
    				source={require('./../img/header.png')}
            resizeMode="contain"
    				/>
    		</View>

        <TouchableOpacity 
                style={styles.buttonContainer}
                onPress={() => this.props.navigator.pop()}>
                  <Text style={styles.buttonText}>
                      <Text style={{fontSize:25}}> f </Text>
                      Sign in with Facebook
                  </Text>
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
    backgroundColor:'#00BFFF',
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
});