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
    key: 'test',
    title: 'Test'
  }
}

const About = ({_handleNavigate}) => (
  <View style={styles.container}>
    <Text style={styles.title}>About</Text>
    <Button onPress={() => _handleNavigate(route)} label='This is About' />
  {/* <Button onPress={_goBack} label='Go Back' /> This is comment*/}
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

export default About