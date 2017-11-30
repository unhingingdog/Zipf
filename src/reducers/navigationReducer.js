import { NavStack } from '../navigators/AppNavigation'

const initial_state = NavStack.router.getStateForAction(NavStack.router.getActionForPathAndParams('MainScreen'))

export default (state = initial_state, action) => {
	const newState = NavStack.router.getStateForAction(action, state)
	return newState || state
}