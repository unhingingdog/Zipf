import { SUBMIT_TEXT } from '../actions/types'

const default_state = { feed: [] }

export default (state = default_state, action) => {
  switch(action.type) {
    case SUBMIT_TEXT:
      return {...state, feed: action.payload }
    default:
      return state
  }
}
