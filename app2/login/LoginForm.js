import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class LoginForm extends Component {
  render() {
    return (
      <View style={styles.container}>
    			<TextInput
            placeholder="Email"
            placeholderTextColor="rgba(255,255,255,0.7)"
            returnKeyType="next"
            onSubmitEditing={() => this.passwordInput.focus()}
            keyboardType="email-address"
            autoCorrect={false}
            style={styles.input}
            />
          <TextInput
            placeholder="Password"
            placeholderTextColor="rgba(255,255,255,0.7)"
            secureTextEntry
            ref={(input) => this.passwordInput = input}
            style={styles.input}
            />

            <TouchableOpacity 
              style={styles.buttonContainer}
              onPress={() => push({ key: 'About' })}>
                  <Text style={styles.buttonText}>Signing In</Text>
            </TouchableOpacity>

            <View style={styles.pushContainer}>
            { /*let element inline*/ }
                <View style={{flex:1}}> 
                { /*let element adjust position inline*/ }
                <TouchableOpacity>
                  <Text style={styles.pushText} onPress={Actions.newuser}>
                  New User?</Text>
                </TouchableOpacity>
                </View>

                <View style={{flex:1}}>
                { /*let element adjust position inline*/ }
                <TouchableOpacity>
                  {/* use key name for Actions.keyname */}
                  <Text style={styles.pushText2} onPress={Actions.lostpassword}>
                      Forgot Password?
                  </Text>
                </TouchableOpacity>
                </View>
            </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding:20,
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
    backgroundColor:'goldenrod',
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