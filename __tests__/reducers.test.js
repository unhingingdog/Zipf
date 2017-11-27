import reducers, { TextReducer } from '../src/reducers'
//import types

describe('TextReducer reducer', () => {
	it('has a default state', () => {
		expect(reducers(undefined, {}))
			.toEqual({ textInput: { text: '' }})
	})
	
	it('changes text state when called', () => {
		expect(reducers(undefined, { type: 'TextChange', payload: 'testtest' }))
			.toEqual({ textInput: { text: 'testtest' }})
	})
})

describe('FlipButton reducer', () => {
	it('has a default state', () => {
		expect(reducers(undefined, {})).toEqual({ buttonMode: { button: 'Paste' }})
	})
	
	it('Flips button state when called', () => {
		expect(reducers(undefined, { type: 'FlipButton' }))
			.toEqual({ buttonMode: { button: 'Read' } })
	})
})
	