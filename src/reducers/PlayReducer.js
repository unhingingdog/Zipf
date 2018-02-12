import {
	PLAY,
	PAUSE,
	STOP,
	INCREMENT,
	DECREMENT,
  SEEK_PLACE
} from '../actions/types'

const initial_state = { playing: false, place: 0 }

export default (state = initial_state, action) => {
	switch(action.type) {
		case PLAY:
			return { ...state, playing: true }
		case PAUSE:
			return { ...state, playing: false }
		case STOP:
			return { place: 0, playing: false }
		case INCREMENT:
			return { ...state, place: state.place + 1 }
		case DECREMENT:
			return { ...state, place: state.place - 1 }
		case SEEK_PLACE:
			return { ...state, place: action.payload.place}
		default:
			return state
	}
}
