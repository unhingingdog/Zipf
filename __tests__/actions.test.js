import { TextChangedAction } from '../src/actions/TextChangedAction'
import { PlayAction,
				 PauseAction,
				 StopAction,
				 IncrementAction,
				 DecrementAction,
				 SeekPlaceAction
			  }
from '../src/actions/PlayAction'
import { TEXT_CHANGE,
				 SUBMIT_TEXT,
				 PLAY,
				 INCREMENT,
				 DECREMENT,
			   PAUSE,
				 STOP,
				 SEEK_PLACE
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

	it('should call seek place', () => {
		const expectedAction = { type: SEEK_PLACE, payload: { place: 100 } }
		expect(SeekPlaceAction(100)).toEqual(expectedAction)
	})
})
