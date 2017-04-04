import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class LostPassword extends Component {
render() {
    return (
  <View style={styles.container}>
      <Text style={styles.text}>Please input your sign up email address:</Text>
      <TextInput
          placeholder="Your Email Address"
          keyboardType="email-address"
          autoCorrect={false}
          style={styles.input}
      />
      <Text style={styles.text2}>
          Note: you will receive an email, please follow the email to complete password reset.
      </Text>
      <TouchableOpacity 
          style={styles.buttonContainer} onPress={Actions.lostpasswordsuccess}>
              <Text style={styles.buttonText}>Reset Password</Text>
      </TouchableOpacity>
  </View> 
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding:20,
    paddingTop:70,
  },
  text: {
    color:'black',
    fontSize:16, 
    fontWeight:'bold',
    paddingBottom:10,
  },
  text2: {
    color:'grey',
    paddingTop:20,
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
    backgroundColor:'red',
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