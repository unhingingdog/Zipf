import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { StackNavigator, addNavigationHelpers } from 'react-navigation'
import { connect } from 'react-redux'
import MainScreen from '../components/MainScreen'
import PlayScreen from '../components/PlayScreen'

const routeConfigs = {
	MainScreen: { screen: MainScreen },
	PlayScreen: { screen: PlayScreen }
}

export const NavStack = StackNavigator(routeConfigs)

class AppNavigation extends Component {
	render() {
		const { navState, dispatch } = this.props
		return(
		 <NavStack
				navigation={addNavigationHelpers({ dispatch, state: navState })}
		 />
		)
	}
}

mapDispatchToProps = dispatch => {
	return { dispatch }
}

const mapStateToProps = state => {
	return { navState: state.navigation }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigation)
