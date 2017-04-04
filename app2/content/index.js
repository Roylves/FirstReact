import React, { Component } from 'react';
import { StyleSheet,View,Text,TextInput,Image,TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Content extends Component {
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
                    <Text style={styles.title}>
                        this is Content Page...{"\n"} What to do here?
                    </Text>
            </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop:30,
  },
  logonContainer: {
    flexDirection:'row',

  },
  logonContainer2: {
    flexDirection:'row',
    flexGrow:1,
  },
  logo: {
    flexShrink:1,
    marginHorizontal:50,
  },
  logo2: {
    flexShrink:1,
    height: 150,
  },
  formContainer: {
    flexGrow:6,
    marginHorizontal:30,
  },
  title: {
    color:'#FFF',
    fontSize:25,
    textAlign:'center',
    opacity:0.9,
    paddingBottom:10,
  },
  text: {
    color:'grey',
    fontSize:17,
    textAlign:'center',
    opacity:0.9,
    paddingTop:10,
    paddingBottom:50,
  },
  input: {
    fontSize:15,
    /* backgroundColor:'rgba(255,255,255,0.2)', for comment */
    backgroundColor:'rgba(0,0,0,0)',
    borderWidth: 2,
    borderRadius:7,
    color:'#FFF',
    paddingHorizontal:10,
    borderColor: 'purple',
  },
  buttonContainer: {
    backgroundColor:'#00CED1',
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