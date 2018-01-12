import PlayReducer from '../../src/reducers/PlayReducer'
import { PLAY,
			   INCREMENT,
			 	 DECREMENT,
				 STOP,
				 PAUSE
} from '../../src/actions/types'

describe('PlayReducer', () => {
  let initial_state

  beforeEach(() => {
    initial_state = { playing: true, place: 0 }
  })

	it('starts playing when PLAY is passed in', () => {
		expect(PlayReducer(initial_state, { type: PLAY }))
      .toEqual({ ...initial_state, playing: true })
	})

  it('increments place when INCREMENT is passed in', () => {
		expect(PlayReducer(initial_state, { type: INCREMENT }).place).toEqual(1)
	})

  it('decrements place when DECREMENT is passed in', () => {
    expect(PlayReducer(initial_state, { type: DECREMENT }).place).toEqual(-1)
  })
})

describe('Pause and stop', () => {
	let initial_state

	beforeEach(() => {
		initial_state = { playing: true, place: 100 }
	})

	it('starts pauses when PAUSE is passed in', () => {
		expect(PlayReducer(initial_state, { type: PAUSE }))
			.toEqual({ playing: false, place: 100 })
	})

	it('starts stops when STOP is passed in', () => {
		expect(PlayReducer(initial_state, { type: STOP }))
			.toEqual({ playing: false, place: 0 })
	})
})
