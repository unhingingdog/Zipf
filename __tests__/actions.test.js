import { testAction } from '../src/actions/testAction'
//import types

describe('actions', () => {
	it('should create a test action to fire textReducer', () => {
		const expectedAction = { type: 'test', payload: 'test this shit' }
		expect(testAction('test')).toEqual(expectedAction)
	})
})