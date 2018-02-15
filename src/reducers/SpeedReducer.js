import { CHANGE_SPEED } from '../actions/types'

initial_state = 40

export default (state = initial_state, action) => {
  switch(action.type) {
    case CHANGE_SPEED:
      return action.payload
    default:
      return state
  }
}
