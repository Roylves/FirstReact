import React from 'react'
import { View,Text,Image,TouchableOpacity } from 'react-native' // 1
import { connect } from 'react-redux'
import { push } from './../../app/navActions'

const Test = ({ push }) => {
  return (
    <View style={styles.container}>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => push({ key: 'About' })}>
                  <Text style={styles.buttonText}>Signing In</Text>
            </TouchableOpacity>    
    </View>
  )
}

function mapStateToProps () { return {} }

function mapDispatchToProps (dispatch) {
  return {
    push: (route) => dispatch(push(route))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Test)

const styles = {
container: {
    padding:20,
  },
  buttonContainer: {
    backgroundColor:'goldenrod',
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
}