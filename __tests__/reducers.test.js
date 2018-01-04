import reducers, { TextReducer } from '../src/reducers'
import { Reducer } from 'redux-testkit'
import { TEXT_CHANGE, 
				 PLAY,
			   INCREMENT,
			 	 DECREMENT
} from '../src/actions/types'

const initial_state = {
	textInput: { text: '' },
	navigation: {},
	play: {
		playing: false,
		place: 0
	}
}

describe('TextReducer', () => {
	it('has a default state', () => {		
		const action = {}
		let test_state = reducers(undefined, action)
		test_state.navigation = {}
		expect(test_state).toEqual(initial_state)
	})
	
	it('changes text state when called', () => {
		const action = { type: TEXT_CHANGE, payload: 'testtest' }
		let test_state = reducers(undefined, action)
		test_state.navigation = {}
		expect(test_state).toEqual({ ...initial_state, textInput: { text: "testtest" }})
	})
})

describe('PlayReducer', () => {
	it('starts playing', () => {
		const action = { type: PLAY }
		let test_state = reducers(undefined, action)
		test_state.navigation = {}
		expect(test_state).toEqual({ ...initial_state, play: { playing: true, place: 0 }})
	})
	it('Increments place', () => {
		const action = { type: INCREMENT }
		let test_state = reducers(undefined, action)
		test_state.navigation = {}
		expect(test_state).toEqual({ ...initial_state, play: { playing: false, place: 1 }})
	})
	it('Decrements place', () => {
		const action = { type: DECREMENT }
		let test_state = reducers(undefined, action)
		test_state.navigation = {}
		expect(test_state).toEqual({ ...initial_state, play: { playing: false, place: -1 }})
	})
})
	