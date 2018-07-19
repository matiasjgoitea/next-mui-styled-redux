import nextConnectRedux from 'next-connect-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import logMiddleware from './middlewares/logs'

export const initStore = (initialState) => (
  createStore(
    reducers,
    initialState,
    composeWithDevTools(
      applyMiddleware(logMiddleware)
    )
  )
)

export const nextConnect = nextConnectRedux(initStore)
