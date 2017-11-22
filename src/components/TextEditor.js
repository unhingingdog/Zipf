import React, { Component } from 'react'
import { Text, View, Button, TextInput } from 'react-native'

export default class TextEditor extends Component {
	render() {
		return (
			<View>
				<TextInput />
				<Button title="some shit" onPress={this.props.pressHandler}></Button>
			</View>
		)
	}
	
}