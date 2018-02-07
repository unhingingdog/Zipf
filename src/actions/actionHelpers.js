import { NavStack } from '../navigators/AppNavigation'
import { NavigationActions } from 'react-navigation'

export const navigateToScreen = (dispatch, screen) => {
	dispatch(
		NavigationActions.navigate({
			routeName: screen
		})
	)
}
