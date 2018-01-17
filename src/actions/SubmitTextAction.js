import { navigateToScreen } from './actionHelpers'
import { TextChangedAction } from './TextChangedAction'
import reducers from '../reducers'
import thunk from 'redux-thunk'
import { Clipboard } from 'react-native'

export const SubmitTextAction = (dispatch) => {
	return (dispatch) => {
		Clipboard.getString()
			.then(content => {
				dispatch(TextChangedAction(content))
				navigateToScreen(dispatch, 'PlayScreen')
			})
			.catch(error => console.log(error))
		}
}
