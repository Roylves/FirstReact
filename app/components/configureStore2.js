import { createStore, applyMiddleware } from 'redux'
import rootReducer from './rootReducer2'
export default function configureStore () {
  const store = createStore(rootReducer)

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./rootReducer2').default
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}