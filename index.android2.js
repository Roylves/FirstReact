/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
} from 'react-native';
import Main from './contents/main/index';
import Page1 from './contents/page1/index';
import Page2 from './contents/page2/index';

export default class AwesomeProject extends Component {
  constructor(){
    super();

    this.renderScene = this.renderScene.bind(this)
  }

  renderScene(route, navigator){
    if(route.name === 'main') {
      return <Main navigator = {navigator} />
    } else if (route.name === 'page1') {
      return <Page1 navigator = {navigator} />
    } else if (route.name === 'page2') {
      return <Page2 navigator = {navigator} />
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{name:'main'}}
        renderScene={this.renderScene}>
      </Navigator>
    )    
  }    
}

AppRegistry.registerComponent('FirstReact', () => AwesomeProject);