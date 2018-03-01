import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './src/reducers'
import AppNavigation from './src/navigators/AppNavigation'
import thunk from 'redux-thunk'

export default class App extends React.Component {
  render() {
		const store = createStore(reducers, {}, applyMiddleware(thunk))
    return(
			<Provider store={store}>
				<AppNavigation />
			</Provider>
		)
  }
}
