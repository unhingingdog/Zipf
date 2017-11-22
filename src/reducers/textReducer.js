const initial_state = { text: '' }

export default (state = initial_state, action) => {
	switch(action.type) {
		case 'TextChange':
			return { ...state, text: action.payload }
		default:
			return state
	}
}
