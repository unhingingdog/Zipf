import React, { Component } from 'react'
import { Text, View, Button, TextInput, Keyboard } from 'react-native'
import TextField from './TextField'

export default class TextEditor extends Component {

	render() {
		return (
			<View style={styles.containerStyle}>
				<TextField
					textValue={this.props.textValue}
					textChange={this.props.textChange}
					inputStyle={styles.inputStyle}
				/>
				<Button title="submit" onPress={this.props.submitText} />
			</View>
		)
	}
}

const styles = {
	containerStyle: {
		backgroundColor: 'white',
		height: 100,
		padding: 20
	},
	buttonStyle: {
		color: 'white',
		backgroundColor: 'aqua',
	},
	inputStyle: {
		color: 'white',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		lineHeight: 23,
		flex: 3,
		backgroundColor: 'black',
		margin: 10,
		borderRadius: 5
	}
}
