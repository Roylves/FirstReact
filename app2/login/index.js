import React, { Component } from 'react';
import { StyleSheet,View,Text,Image,TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import LoginForm from './LoginForm';
import ConnectForm from './ConnectForm';

const Login = () => {
    return (
      <View style={styles.container}>
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
      </View>
    );
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

export default Login;