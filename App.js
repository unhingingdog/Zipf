import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './src/reducers'
import AppNavigation from './src/navigators/AppNavigation'



export default class App extends React.Component {
  render() {
    return(
			<Provider store={createStore(reducers)}>
				<AppNavigation />
			</Provider>
		)
  }
}


