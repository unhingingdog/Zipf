import { TextChangedAction } from '../src/actions/TextChangedAction'
//import types

describe('actions', () => {
	it('should call TextChange', () => {
		const expectedAction = { type: 'TextChange', payload: 'test' }
		expect(TextChangedAction('test')).toEqual(expectedAction)
	})
})
