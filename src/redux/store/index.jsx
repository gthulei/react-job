import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

export default function configureStore() {
  const store = createStore(
    rootReducer,
    window.devToolsExtension ? window.devToolsExtension() : undefined,
    applyMiddleware(thunk)
  )
  return store
}