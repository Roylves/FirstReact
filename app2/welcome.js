import React, { Component } from 'react';
import { StyleSheet,View,Text,Image,TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Welcome extends Component {
render() {
    return (
      <View style={styles.container}>
          <View style={styles.logonContainer}>
            <Image 
              style={styles.logo} 
              source={require('./img/cps.png')}
              resizeMode="contain"
              />
          </View>

              <View style={styles.formContainer}>
                  <Text style={styles.title}>
                      WELCOME {"\n"} TO {"\n"} My PathSource
                  </Text>

                  <View style={styles.pushContainer}>
                  { /*let element inline*/ }
                      <View style={{flex:1}}> 
                      { /*let element adjust position inline*/ }
                      <TouchableOpacity>
                        <Text style={styles.pushText} onPress={Actions.newuser}>
                        New User
                        </Text>
                      </TouchableOpacity>
                      </View>

                      <View style={{flex:1}}>
                      { /*let element adjust position inline*/ }
                      <TouchableOpacity>
                        {/* use key name for Actions.keyname */}
                        <Text style={styles.pushText2} onPress={Actions.login}>
                            Existing User
                        </Text>
                      </TouchableOpacity>
                      </View>
                  </View>
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
  logo: {
    flexShrink:1,
    marginHorizontal:50,
  },
  formContainer: {
    flexGrow:2,
    alignItems:'center',
  },
  title: {
    color:'#FFF',
    fontSize:30,
    textAlign:'center',
    opacity:0.9,
    paddingBottom:20,
  },
  pushContainer: {
    flexDirection:'row',
    flexWrap:'wrap',
    marginHorizontal:70,
  },
  pushText: {
    textAlign:'left',
    color: 'orange',
    fontSize:20,
  },
  pushText2: {
    textAlign:'right',
    color: 'lime',
    fontSize:20,
  },
});