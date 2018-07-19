import { TOGGLE_SOCKET } from '../constants';

const initialState = {
  isConnected: false
}

export default function socket(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SOCKET:
      return action.isConnected;
    default:
      return state;
  }
}
