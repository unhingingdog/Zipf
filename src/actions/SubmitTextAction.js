import { navigateToScreen } from './actionHelpers'
import { TextChangedAction } from './TextChangedAction'
import reducers from '../reducers'
import thunk from 'redux-thunk'
import { Clipboard } from 'react-native'
import weightEngine from '../engine'
import { SUBMIT_TEXT, TEXT_CHANGE } from './types'

const default_speed = 1
//inject Clipboard so it can be mocked
export const SubmitTextAction = (dispatch, clipboard = Clipboard) => {
	return async dispatch => {
		const content = await clipboard.getString()
		const payload = await weightEngine(content, default_speed)
		dispatch({ type: SUBMIT_TEXT, payload })
		navigateToScreen(dispatch, 'PlayScreen')
	}
}
