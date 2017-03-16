import React, { Component, PropTypes } from 'react'
import { View, Text, NavigationExperimental } from 'react-native'
import Login from './../login/index'
import LostPassword from './../login/LostPassword'
import LostPasswordSuccess from './../login/LostPasswordSuccess'
import Home from './../main/Home'
import About from './../main/About'

const {
  CardStack: NavigationCardStack,
  Header: NavigationHeader,
} = NavigationExperimental

let styles = {}

class Header extends Component {
  render() {
    return (
      <NavigationHeader
        {...this.props}
        renderTitleComponent={this._renderTitleComponent}
        onNavigateBack={this._back}
      />
    );
  }

  _back = () => {
    this.props.pop()
  }

  _renderTitleComponent= (props) => {
    return (
      <NavigationHeader.Title>
        {props.scene.route.key}
      </NavigationHeader.Title>
    );
  }
}

export default class NavigationCardStackExample extends Component {
  _renderScene = (props) => {
    switch(props.scene.route.key) {
      case 'Login':
        return <Login />
      case 'Lost Password':
        return <LostPassword />
      case 'LostPasswordSuccess':
        return <LostPasswordSuccess />
      case 'Home':
        return <Home />
      case 'About':
        return <About />
    }
  }
  _renderHeader = (sceneProps) => {
    return (
      <Header
        pop={this.props.pop}
        {...sceneProps}
      />
    );
  }
  render() {
    const { navState } = this.props
    let direction = 'horizontal'

    return (
      <NavigationCardStack
        direction={direction}
        renderHeader={this._renderHeader}
        navigationState={this.props.navState}
        renderScene={this._renderScene} 
      />
    )
  }
}

styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
}