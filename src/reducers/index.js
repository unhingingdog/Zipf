import { combineReducers } from 'redux'
import TextReducer from './TextReducer'
import navigationReducer from './navigationReducer'
import PlayReducer from './PlayReducer'

export default combineReducers({
	textInput: TextReducer,
	navigation: navigationReducer,
	play: PlayReducer
})