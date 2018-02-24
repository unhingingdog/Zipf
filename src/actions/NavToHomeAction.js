import { STOP } from './types'
import { navigateBack } from './actionHelpers'

export default NavToHomeAction = dispatch => {
	return dispatch => {
		dispatch({ type: STOP })
		navigateBack(dispatch)
	}
}
