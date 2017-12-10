import { navigateToScreen } from './actionHelpers'

export const FlipButtonAction = (dispatch) => {
	navigateToScreen(dispatch, 'PlayScreen')
	return { type: 'FlipButton' }
}