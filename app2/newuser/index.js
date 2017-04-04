import React, { Component } from 'react';
import { StyleSheet,View,Text,Image,TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Newuser extends Component {
render() {
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
              <View style={styles.logonContainer2}>
                <Image 
                  style={styles.logo2} 
                  source={require('./../img/hello.png')}
                  resizeMode="contain"
                  />
              </View>

              <Text style={styles.text}>
                  Learn more about yourself and find your ideal job today
              </Text>

              <TouchableOpacity 
              style={styles.buttonContainer} onPress={Actions.newname}>
                  <Text style={styles.buttonText}>Let's Begin</Text>
              </TouchableOpacity>

          </View>
      </View>
    );
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
  logonContainer2: {
    flexDirection:'row',
  },
  logo: {
    flexShrink:1,
    marginHorizontal:50,
  },
  logo2: {
    flexShrink:1,
  },
  formContainer: {
    flexGrow:6,
    marginHorizontal:50,
  },
  text: {
    color:'#FFF',
    fontSize:20,
    textAlign:'center',
    opacity:0.9,
    paddingBottom:20,
  },
  buttonContainer: {
    backgroundColor:'goldenrod',
    paddingVertical:10,
    paddingVertical:10,
    borderRadius:7,
  },
  buttonText: {
    textAlign:'center',
    color: '#FFFFFF',
    fontWeight:'900',
    fontSize:20,
  },
});