import React, { Component, PropTypes } from 'react'
import { View, Text, NavigationExperimental } from 'react-native'

const {
  CardStack: NavigationCardStack,
  StateUtils: NavigationStateUtils,
} = NavigationExperimental

let styles = {}

const Home = ({ navigate }) => {
  return (
    <View style={styles.container}>
      <Text>Hello from Home</Text>
      <Text onPress={() => navigate('push', { key: 'About' })}>Go To About</Text>
    </View> 
  )
}

const About = ({ navigate }) => (
  <View style={styles.container}>
    <Text>Hello from About</Text>
    <Text onPress={() => navigate('pop')}>Back</Text>
  </View> 
)

function reducer(state: object, action: string, route: object): object {
  if (!state) {
    return {
      index: 0,
      routes: [{ key: 'Home' }],
    };
  }
  switch (action) {
    case 'push': {
      return NavigationStateUtils.push(state, route)
      //For 'Reset' method, use -> return NavigationStateUtils.reset(state, [route],0) //
      // const routes = state.routes.slice();
      // routes.push(route);
      // return {
      //   ...state,
      //   index: routes.length - 1,
      //   routes,
      // }
    }
    case 'pop': {
      return NavigationStateUtils.pop(state)
      // if (state.index <= 0) return state
      // const routes = state.routes.slice(0, -1);
      // return {
      //   ...state,
      //   index: routes.length - 1,
      //   routes,
      // }
    }
    
    default:
      return state
    }
}

class NavigationCardStackExample extends Component {
  state = { navState: reducer() }
  _renderScene = (props) => {
    switch(props.scene.route.key) {
      case 'Home':
        return <Home navigate={this._navigate} />
      case 'About':
        return <About navigate={this._navigate} />
    }
  }
  _navigate = (action, route) => {
    const navState = reducer(this.state.navState, action, route)
    this.setState({
      navState
    })
  }
  render() {
    const { navState } = this.state
    return (
      <NavigationCardStack
        navigationState={this.state.navState}
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

export default NavigationCardStackExample;