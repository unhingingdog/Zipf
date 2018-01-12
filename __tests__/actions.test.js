import { TextChangedAction } from '../src/actions/TextChangedAction'
import { PlayAction,
				 PauseAction,
				 StopAction,
				 IncrementAction,
				 DecrementAction,
			  }
from '../src/actions/PlayAction'
import { TEXT_CHANGE,
				 PLAY,
				 INCREMENT,
				 DECREMENT,
			   PAUSE,
				 STOP
			 }
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

	it('should call Pause', () => {
		const expectedAction = { type: PAUSE }
		expect(PauseAction()).toEqual(expectedAction)
	})

	it('should call Stop', () => {
		const expectedAction = { type: STOP }
		expect(StopAction()).toEqual(expectedAction)
	})

	it('should call increment', () => {
		const expectedAction = { type: INCREMENT }
		expect(IncrementAction()).toEqual(expectedAction)
	})

	it('should call decrement', () => {
		const expectedAction = { type: DECREMENT }
		expect(DecrementAction()).toEqual(expectedAction)
	})
})
