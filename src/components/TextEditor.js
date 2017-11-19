import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class TextEditor extends Component {
	render() {
		return (
			<View>
				<Text>{this.props.test}</Text>
				<Button title="some shit" onPress={this.props.pressHandler}></Button>
			</View>
		)
	}
	
}