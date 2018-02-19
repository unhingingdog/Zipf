import { STOP } from './types'
import { navigateBack } from './actionHelpers'

export default NavToHomeAction = dispatch => {
	return async dispatch => {
		dispatch({ type: STOP })
		navigateBack(dispatch)
	}
}
