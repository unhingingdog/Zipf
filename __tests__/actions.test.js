import { testAction } from '../src/actions/testAction'
//import types

describe('actions', () => {
	it('should create a test action to fire textReducer', () => {
		const expectedAction = { type: 'test', payload: 'changed' }
		expect(testAction('test')).toEqual(expectedAction)
	})
})