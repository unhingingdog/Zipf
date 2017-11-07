import { combineReducers } from 'redux'
import textReducer from './textReducer'
import playReducer from './playReducer'

export default combineReducers({
	text: textReducer,
	play: playReducer
})