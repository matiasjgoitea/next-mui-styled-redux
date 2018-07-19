import { combineReducers } from 'redux'
import data from './data.reducer'
import session from './session.reducer'
import socket from './socket.reducer'

const reducers = {
  data,
  session,
  socket
}

export default combineReducers(reducers);
