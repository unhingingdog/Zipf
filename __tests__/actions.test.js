import { TextChangedAction } from '../src/actions/TextChangedAction'
import { PlayAction, 
				 IncrementAction, 
				 DecrementAction } 
from '../src/actions/PlayAction'
import { TEXT_CHANGE, 
				 PLAY, 
				 INCREMENT, 
				 DECREMENT } 
from '../src/actions/types'

describe('actions', () => {
	it('should call TextChange', () => {
		const expectedAction = { type: TEXT_CHANGE, payload: 'test' }
		expect(TextChangedAction('test')).toEqual(expectedAction)
	})
	it('should call Play', () => {
		const expectedAction = { type: PLAY }
		expect(PlayAction()).toEqual(expectedAction)
	})
	it('should call increment', () => {
		const expectedAction = { type: INCREMENT }
		expect(IncrementAction()).toEqual(expectedAction)
	})
		it('should call increment', () => {
		const expectedAction = { type: DECREMENT }
		expect(DecrementAction()).toEqual(expectedAction)
	})
})
