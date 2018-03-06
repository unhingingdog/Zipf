import { CHANGE_SPEED } from '../../src/actions/types'
import SpeedReducer from '../../src/reducers/SpeedReducer'

initial_state = 70

describe('Speed Reducer', () => {
  it('speed changes when CHANGE_SPEED is passed in', () => {
    expect(SpeedReducer(initial_state, {
  		type: CHANGE_SPEED,
  		payload: 60
  	})).toEqual(60)
  })

  it('does not allow a speed of lower than 50', () => {
    expect(SpeedReducer(initial_state, {
      type: CHANGE_SPEED,
      payload: 40
    })).toEqual(70)
  })

  it('does not allow a speed of over 100', () => {
    expect(SpeedReducer(initial_state, {
      type: CHANGE_SPEED,
      payload: 102
    })).toEqual(70)
  })
})
