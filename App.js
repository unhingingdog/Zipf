import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './src/reducers'
import MainScreen from './src/components/MainScreen'

export default class App extends React.Component {
  render() {
    return(
			<Provider store={createStore(reducers)}>
				<MainScreen />
			</Provider>
		)
  }
}


