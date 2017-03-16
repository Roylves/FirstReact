import React, { Component } from 'react'
import { DrawerLayoutAndroid } from 'react-native'

import Recipes from './Recipes'
import Samples from './Samples'
import Home from './../components/NavRootContainer2'

class Tabs extends Component {
  _changeTab (i) {
    const { changeTab } = this.props
    changeTab(i)
  }
  _renderTabContent (key) {
    switch (key) {
      case 'home':
        return <Home />
      case 'recipes':
        return <Recipes />
      case 'samples':
        return <Samples />
    }
  }
  render () {
    const tabs = this.props.tabs.tabs.map((tab, i) => {
      return (
        <DrawerLayoutAndroid.Item key={tab.key}
          icon={tab.icon}
          selectedIcon={tab.selectedIcon}
          title={tab.title}
          onPress={() => this._changeTab(i)}
          selected={this.props.tabs.index === i}>
          {this._renderTabContent(tab.key)}
        </DrawerLayoutAndroid.Item>
      )
    })
    return (
      <DrawerLayoutAndroid tintColor='black'>
        {tabs}
      </DrawerLayoutAndroid>
    )
  }
}

export default Tabs