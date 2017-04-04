import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import Button from './Button'

const route = {
  type: 'push',
  route: {
    //key is a unique id/class->assign to specific page->IMPORTANT
    key: 'about',
    title: 'About'
  }
}

const Home = ({_handleNavigate}) => (
  <View style={styles.container}>
    <Text style={styles.title}>Home</Text>
    <Button onPress={() => _handleNavigate(route)} label='This is Home' />
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