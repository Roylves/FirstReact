import { PUSH_ROUTE, POP_ROUTE, RESET_ROUTE } from './constants'
import { NavigationExperimental } from 'react-native'
const {
  StateUtils: NavigationStateUtils
} = NavigationExperimental

const initialState = {
  index: 0,
  key: 'root',
  routes: [{
   key: 'home',
   title: 'Home'
  }]
}

function navigationState (state = initialState, action) {
  switch (action.type) {
    
    case PUSH_ROUTE:
      if (state.routes[state.index].key === (action.route && action.route.key)) return state
    return NavigationStateUtils.push(state, action.route)

    case POP_ROUTE:
      if (state.index === 0 || state.routes.length === 1) return state
      return NavigationStateUtils.pop(state)

    case RESET_ROUTE:
    return NavigationStateUtils.reset(state, [action.route],0)

   default:
     return state
  
  }
}

export default navigationState