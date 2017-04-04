import React, { Component } from 'react'
import Home from './Home'
import About from './About'
import Test from './Test'

import {
  BackAndroid,
  NavigationExperimental
} from 'react-native'

const {
  CardStack: NavigationCardStack
} = NavigationExperimental

class NavRoot extends Component {
  constructor (props) {
    super(props)
    this._renderScene = this._renderScene.bind(this)
    this._handleBackAction = this._handleBackAction.bind(this)
  }
  componentDidMount () {
    BackAndroid.addEventListener('hardwareBackPress', this._handleBackAction)
  }
  componentWillUnmount () {
    BackAndroid.removeEventListener('hardwareBackPress', this._handleBackAction)
  }

  //Place to declare page route
  _renderScene (props) {
    const { route } = props.scene
    if (route.key === 'home') {
     return <Home
              _handleNavigate={this._handleNavigate.bind(this)} />
    }
    if (route.key === 'about') {
     return <About 
              _handleNavigate={this._handleNavigate.bind(this)} />
    }
    if (route.key === 'test') {
     return <Test
              _resetNavigate={this._resetNavigate.bind(this)} />
    }
  }
  _handleBackAction () {
    if (this.props.navigation.index === 0) {
      return false
    }
    this.props.popRoute()
    return true
  }
  _handleNavigate (action) {
        this.props.pushRoute(action.route)
        return true
  }
  _resetNavigate (action) {
        this.props.resetRoute(action.route)
        return true
  }
  render () {
    return (
      <NavigationCardStack
        direction='horizontal'
        navigationState={this.props.navigation}
        onNavigate={this._handleNavigate.bind(this)}
        renderScene={this._renderScene} />
      )
   }
}

export default NavRoot