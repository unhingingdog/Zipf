import { TEXT_CHANGE, PLAY } from '../actions/types'

const initial_state = { text: '' }

export default (state = initial_state, action) => {
	switch(action.type) {
		case TEXT_CHANGE:
			return { ...state, text: action.payload }
		default:
			return state
	}
}
