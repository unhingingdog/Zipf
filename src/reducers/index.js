import { combineReducers } from 'redux'
import TextReducer from './TextReducer'
import navigationReducer from './navigationReducer'

export default combineReducers({
	textInput: TextReducer,
	navigation: navigationReducer
})