import { TextChangedAction } from '../src/actions/TextChangedAction'
import { FlipButtonAction } from '../src/actions/FlipButtonAction'
//import types

describe('actions', () => {
	it('should call TextChange', () => {
		const expectedAction = { type: 'TextChange', payload: 'test' }
		expect(TextChangedAction('test')).toEqual(expectedAction)
	})
	
	it('should call FlipButton', () => {
		const expectedAction = { type: 'FlipButton' }
		expect(FlipButtonAction()).toEqual(expectedAction)
	})
})