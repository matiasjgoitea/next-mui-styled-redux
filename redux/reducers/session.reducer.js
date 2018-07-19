import { INITIALIZE_SESSION } from '../constants'

export default function sessionReducer (state = false, action) {
  switch (action.type) {
    case INITIALIZE_SESSION:
      return true
    default:
      return state
  }
}
