import reducers, { textReducer } from '../src/reducers'
//import types

describe('textReducer', () => {
	it('has a default state', () => {
		expect(reducers(undefined, {}))
			.toEqual({ textReducer: { test: 'Hello?' }})
	})
	
	it('changes when passed test action', () => {
		expect(reducers(undefined, { type: 'test', payload: 'testtest'}))
			.toEqual({ textReducer: { test: 'testtest' }})
	})
})
	