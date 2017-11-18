import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './src/reducers'
import PlayScreen from './src/components/PlayScreen'

export default class App extends React.Component {
  render() {
    return(
			<Provider store={createStore(reducers)}>
				<PlayScreen />
			</Provider>
		)
  }
}


