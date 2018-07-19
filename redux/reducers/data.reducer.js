import { STORE_DATA } from '../constants'

export default function dataReducer (state = [], action) {
  switch (action.type) {
    case STORE_DATA:
      return action.data
    default:
      return state
  }
}
