import reducers, { TextReducer } from '../src/reducers'
//import types

describe('TextReducer', () => {
	it('has a default state', () => {
		expect(reducers(undefined, {}))
			.toEqual({ TextReducer: { text: '' }})
	})
	
	it('changes text state when text is edited', () => {
		expect(reducers(undefined, { type: 'TextChange', payload: 'testtest' }))
			.toEqual({ TextReducer: { text: 'testtest' }})
	})
})
	