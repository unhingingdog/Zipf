import navigation from '../src/reducers'
import { Reducer } from 'redux-testkit'
import { addNavigationHelpers } from 'react-navigation'
import { NavStack } from '../src/Navigators/AppNavigation'

//const initial_state = {
//	buttonMode: { buttonMode: "Paste" }, 
//	textInput: { text: '' },
//	navigation: {
//		key: 0,
//		
//	}
//}

const initial_state = NavStack.router.getStateForAction(NavStack.router.getActionForPathAndParams('MainScreen'))


//describe('Navigation', () => {
//	addNavigationHelpers({ dispatch, state: initial_state })
//})