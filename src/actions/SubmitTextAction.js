import { navigateToScreen } from './actionHelpers'
import { TextChangedAction } from './TextChangedAction'
import reducers from '../reducers'
import thunk from 'redux-thunk'
import { Clipboard } from 'react-native'
import weightEngine from '../engine'

export const SubmitTextAction = (dispatch) => {
	return (dispatch) => {
		Clipboard.getString()
			.then(content => engine(content, 1))
			.then(feed => {
				dispatch(//TextSubmittedAction(content)) //places content in feed state
				navigateToScreen(dispatch, 'PlayScreen')
			})
			.catch(error => console.log(error))
		}
}

//remove hardcoded speed
