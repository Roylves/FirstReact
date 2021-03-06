//Default/starter page from ./app/components/navReducer
//Routing from ./app/components/NavigationCardStack
import React from 'react'
import { AppRegistry } from 'react-native'
import NavRootContainer from './app/components/NavRootContainer'
import configureStore from './app/components/configureStore'
import { Provider } from 'react-redux'
const store = configureStore()

const App = () => (
  <Provider store={store}>
    <NavRootContainer />
  </Provider>
)

AppRegistry.registerComponent('FirstReact', () => App);