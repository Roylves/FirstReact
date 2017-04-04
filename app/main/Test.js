import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import Button from './Button'

const route = {
  type: 'reset',
  route: {
    key: 'home',
    title: 'Home'
  }
}

const Test = ({_resetNavigate}) => (
  <View style={styles.container}>
    <Text style={styles.title}>Test</Text>
    <Button onPress={() => _resetNavigate(route)} label='Go To About' />
  </View>
)

const styles = StyleSheet.create({
  title: {
    marginBottom: 20,
    fontSize: 22,
    textAlign: 'center'
  },
  container: {
    paddingTop: 60
  }
})

export default Test