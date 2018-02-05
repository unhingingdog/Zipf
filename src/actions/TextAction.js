import { navigateToScreen } from './actionHelpers'
import reducers from '../reducers'
import thunk from 'redux-thunk'
import { Clipboard } from 'react-native'
import weightEngine from '../engine'
import { SUBMIT_TEXT, TEXT_CHANGE } from './types'

export const TextChangedAction = text => {
	return { type: TEXT_CHANGE, payload: text }
}
