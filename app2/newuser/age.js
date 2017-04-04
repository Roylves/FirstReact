import React, { Component } from 'react';
import { StyleSheet,View,Text,TextInput,Image,TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Newage extends Component {
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
                {/* Start of ensuring image view not interrupt with keyboardView */}
                {/* Play with flex value to get correct adjustment */}
                {/* flex not same as flexGrow */}
                {/* flex will not overlap with flexGrow */}
                {/* flexGrow like children for flex, & image cant hide when keyboard popup */}
                <View style={{flex: 2}}>
                    {/* Use flexGrow to center image content */}
                    <View style={styles.logonContainer2}>
                      {/* Use flexShrink to return parent view to flex=0 */}
                      <Image 
                        style={styles.logo2} 
                        source={require('./../img/name3.png')}
                        resizeMode="contain"
                        />
                    </View>
                </View>
                  {/* End of ensuring image view not interrupt with keyboardView */}

                {/* use flexGrow instead of flex to nicely adjust position */}
              {/* use flexGrow to avoid overlap with image flex */}
                <View style={{flexGrow: 0.5}}>
                    <Text style={styles.title}>
                        What is your age?
                    </Text>
                    <TextInput
                    placeholder="Age"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    autoCorrect={false}
                    style={styles.input}
                    />
                    <Text style={styles.text}>
                        We will not share your information with any third party without your permission
                    </Text>
                </View>

                <View style={{flex: 1}}>
                    <TouchableOpacity 
                    style={styles.buttonContainer} onPress={Actions.newemail}>
                        <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>
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