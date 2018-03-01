import { CHANGE_SPEED } from '../actions/types'

initial_state = 40

export default (state = initial_state, action) => {
  const { type, payload } = action

  switch(type) {
    case CHANGE_SPEED:
      if (payload < 100 && payload > 0) return payload
      return state
    default:
      return state
  }
}
