const initial_state = { buttonMode: 'Paste' }

export default (state = initial_state, action) => {
	switch(action.type) {
		case 'FlipButton':
			buttonMode = state.buttonMode === 'Paste' ? 'Read' : 'Paste'
			return {...state, buttonMode }
		default:
			return state
	}
}