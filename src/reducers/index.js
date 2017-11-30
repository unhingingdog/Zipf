import { combineReducers } from 'redux'
import TextReducer from './TextReducer'
import ButtonReducer from './ButtonReducer'
import navigationReducer from './navigationReducer'

export default combineReducers({
	textInput: TextReducer,
	buttonMode: ButtonReducer,
	navigation: navigationReducer
})