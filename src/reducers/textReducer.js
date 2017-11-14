const initial_state = { shit: 'shit', test: 'Hello?' }

export default (state = initial_state, action) => {
	switch(action.type) {
		case 'test':
			console.log('test reducer fired')
			console.log('action: ', action)
			console.log('state: ', state)
			return { ...state, test: action.payload }
		default:
			console.log('test default fired')
			console.log('action: ', action)
			console.log('state: ', state)
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