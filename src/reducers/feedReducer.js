import { SUBMIT_TEXT } from '../actions/types'

const default_state = []

export default (state = default_state, action) => {
  switch(action.type) {
    case SUBMIT_TEXT:
      return [ ...action.payload ]
    default:
      return state
  }
}
