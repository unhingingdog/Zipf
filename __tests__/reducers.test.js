import reducers, { TextReducer } from '../src/reducers'
import { Reducer } from 'redux-testkit'
//import types

const initial_state = {
	textInput: { text: '' },
	navigation: {}
}

describe('TextReducer', () => {
	
	it('has a default state', () => {		
		const action = {}
		let test_state = reducers(undefined, action)
		test_state.navigation = {}
		expect(test_state).toEqual(initial_state)
	})
	
	it('changes text state when called', () => {
		const action = { type: 'TextChange', payload: 'testtest' }
		let test_state = reducers(undefined, action)
		test_state.navigation = {}
		expect(test_state).toEqual({ ...initial_state, textInput: { text: "testtest" }})
	})
})
	