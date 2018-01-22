import { navigateToScreen } from './actionHelpers'
import { TextChangedAction } from './TextChangedAction'
import reducers from '../reducers'
import thunk from 'redux-thunk'
import { Clipboard } from 'react-native'
import weightEngine from '../engine'

import { SUBMIT_TEXT, TEXT_CHANGE } from './types'
const default_speed = 1

export const SubmitTextAction = () => {
	return async dispatch => {
		const content = await Clipboard.getString()
		const payload = await weightEngine(content, default_speed)
		dispatch({ type: SUBMIT_TEXT, payload })
		navigateToScreen(dispatch, 'PlayScreen')
	}
}
