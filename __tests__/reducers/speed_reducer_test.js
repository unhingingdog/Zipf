import { CHANGE_SPEED } from '../../src/actions/types'
import SpeedReducer from '../../src/reducers/SpeedReducer'

initial_state = 40

describe('Speed Reducer', () => {
  it('speed changes when CHANGE_SPEED is passed in', () => {
    expect(SpeedReducer(initial_state, {
  		type: CHANGE_SPEED,
  		payload: 50
  	})).toEqual(50)
  })
})
