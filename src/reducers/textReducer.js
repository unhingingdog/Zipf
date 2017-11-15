const initial_state = { test: 'Hello?' }

export default (state = initial_state, action) => {
	switch(action.type) {
		case 'test':
			return { ...state, test: action.payload }
		default:
			return state
	}
}

//initial_state = { test: "testreducer"}
//
//export default (state = initial_state, action) => {
//	switch(action.type) {
//		case 'select_library':
//			return action.payload
//		default:
//			return state	
//	}
//}