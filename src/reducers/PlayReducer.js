import { PLAY } from '../actions/types'

const initial_state = { playing: false, bookmark: 0 }

export default (state = initial_state, action) => {
	switch(action.type) {
		case PLAY:
			return { ...state, playing: true}		
		default:
			return state
	}
}