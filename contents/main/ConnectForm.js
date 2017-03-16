import React, { Component } from 'react';
import {
  StyleSheet,
  Navigator,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

export default class LoginForm extends Component {
  render() {
    return (
      <View style={styles.container}>

            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.buttonText}>
                  <Text style={{fontSize:25}}> in </Text>
                  Sign in with Linkedln</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.buttonText}>
                  <Text style={{fontSize:25}}> f </Text>
                  Sign in with Facebook
              </Text>
            </TouchableOpacity>

      </View>
    )    
  }    
}

const styles = StyleSheet.create({
  container: {
    padding:20,
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