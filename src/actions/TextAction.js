import { navigateToScreen } from './actionHelpers'
import reducers from '../reducers'
import thunk from 'redux-thunk'
import { Clipboard } from 'react-native'
import weightEngine from '../engine'
import { SUBMIT_TEXT, TEXT_CHANGE } from './types'

const getAsync = async () => {
	console.log('in async')
	const content = await Clipboard.getString()
	//const feed = await engine(content, 1)
	return content
}

export const SubmitTextAction = (dispatch) => {
	console.log('in submit text action')
	console.log(getAsync())
}

// .then(feed => {
// 	dispatch(//TextSubmittedAction(content)) //places content in feed state
// 	navigateToScreen(dispatch, 'PlayScreen')
// })

export const TextChangedAction = text => {
	return { type: TEXT_CHANGE, payload: text }
}
//remove hardcoded speed
