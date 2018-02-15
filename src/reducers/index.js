import { combineReducers } from 'redux'
import textReducer from './textReducer'
import navigationReducer from './navigationReducer'
import PlayReducer from './PlayReducer'
import feedReducer from './feedReducer'
import SpeedReducer from './SpeedReducer'

export default combineReducers({
	textInput: textReducer,
	navigation: navigationReducer,
	play: PlayReducer,
	feed: feedReducer,
	speed: SpeedReducer
})
