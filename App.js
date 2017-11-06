import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation'
import PlayScreen from './src/components/PlayScreen'
import TextInput from './src/components/TextInput'

const Tabs = TabNavigator({
	text: { screen: TextInput },
	play: { screen: PlayScreen }
})


export default class App extends React.Component {
  render() {
    return <Tabs />
  }
}


