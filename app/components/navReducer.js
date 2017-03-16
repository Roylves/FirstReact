import { NavigationExperimental } from 'react-native'
const {
  StateUtils: NavigationStateUtils
} = NavigationExperimental

import { PUSH_ROUTE, POP_ROUTE, RESET_ROUTE } from './constants'

function navReducer(state, action) {
  if (!state) {
    return {
      index: 0,
      routes: [{ key: 'Login' }],
    }
  }
  switch (action.type) {
    case PUSH_ROUTE: {
      return NavigationStateUtils.push(state, action.route)
    }
    case POP_ROUTE: {
      return NavigationStateUtils.pop(state)
    }
    case RESET_ROUTE: {
      return NavigationStateUtils.reset(state, [action.route],0)
      //return NavigationStateUtils.replaceAt(state, action.route.key, action.route)//
    }
    default:
      return state
  }
}

export default navReducer