import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './src/reducers'
import MainScreen from './src/components/MainScreen'
import PlayScreen from './src/components/PlayScreen'

export default class App extends React.Component {
  render() {
    return(
			<Provider store={createStore(reducers)}>
				<MainScreen />
			</Provider>
		)
  }
}


