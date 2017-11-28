import reducers, { TextReducer } from '../src/reducers'
import { Reducer } from 'redux-testkit'
//import types

const initial_state = {
	buttonMode: {buttonMode: "Paste"}, 
	textInput: { text: '' }
}

describe('TextReducer reducer', () => {
	it('has a default state', () => {
		expect(reducers(undefined, {})).toEqual(initial_state)
	})
	
	it('changes text state when called', () => {
		const action = { type: 'TextChange', payload: 'testtest' }
		
		expect(reducers(undefined, action))
			.toEqual({ ...initial_state, textInput: { text: 'testtest' }})
	})
})

describe('FlipButton reducer', () => {
	const action = { type: 'FlipButton' }
	
	it('has a default state', () => {
		expect(reducers(undefined, {})).toEqual(initial_state)
	})
	
	it('Flips button state when called', () => {
		expect(reducers(undefined, action))
			.toEqual({ ...initial_state, buttonMode: { buttonMode: 'Read' } })
	})
})
	