import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class LostPasswordSuccess extends Component {
render() {
    return (
  <View style={styles.container}>
      <Text style={styles.text}>Your reset password successfully sent to:</Text>
      <Text style={styles.text2}>
          xxxxxx@gmail.com
      </Text>
      <TouchableOpacity 
          style={styles.buttonContainer} onPress={Actions.login}>
              <Text style={styles.buttonText}>Go to Login</Text>
      </TouchableOpacity>
  </View> 
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding:20,
    paddingTop:50,
  },
  text: {
    color:'green',
    fontSize:22, 
    fontWeight:'bold',
    paddingBottom:10,
    justifyContent:'center',
  },
  text2: {
    color:'grey',
    paddingTop:5,
    fontSize:17, 
    fontWeight:'bold',
    paddingBottom:10,
  },
  input: {
    fontSize:16,
    /* backgroundColor:'rgba(255,255,255,0.2)', for comment */
    backgroundColor:'rgba(0,0,0,0)',
    borderWidth: 2,
    borderRadius:7,
    borderColor: 'darkred',
    color:'black',
    paddingHorizontal:10,
  },
  buttonContainer: {
    backgroundColor:'green',
    paddingVertical:10,
    marginTop:10,
    borderRadius:7,
  },
  buttonText: {
    textAlign:'center',
    color: '#FFFFFF',
    fontWeight:'900',
    fontSize:20,
  },
});