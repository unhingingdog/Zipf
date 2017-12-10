const initial_state = { buttonMode: 'Paste' }

export default (state = initial_state, action) => {
	switch(action.type) {
		case 'FlipButton':
			if(state.buttonMode === 'Paste') { 
				buttonMode = 'Read'
			}
			return {...state, buttonMode }
		default:
			return state
	}
}