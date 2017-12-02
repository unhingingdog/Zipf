import { NavStack } from '../navigators/AppNavigation'
import { navigateToScreen } from './actionHelpers'

export const FlipButtonAction = (navigate) => {
	navigate('PlayScreen', { screen: 'PlayScreen' })
	return { type: 'FlipButton' }
}