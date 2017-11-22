import { 
	TextChangedAction
} from '../src/actions/TextChangedAction'
//import types

describe('actions', () => {
	it('should call TextChange when text is changed', () => {
		const expectedAction = { type: 'TextChange', payload: 'test' }
		expect(TextChangedAction('test'))
			.toEqual(expectedAction)
	})
})