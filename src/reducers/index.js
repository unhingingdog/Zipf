import { combineReducers } from 'redux'
import TextReducer from './TextReducer'
import ButtonReducer from './ButtonReducer'

export default combineReducers({
	textInput: TextReducer,
	buttonMode: ButtonReducer
})