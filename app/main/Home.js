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
    key: 'test',
    title: 'Test'
  }
}

const Home = ({_resetNavigate}) => (
  <View style={styles.container}>
    <Text style={styles.title}>Home</Text>
    <Button onPress={() => _resetNavigate(route)} label='Go To Test' />
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

export default Home