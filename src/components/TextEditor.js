import React, { Component } from 'react'
import { Text, View, Button, TextInput, Keyboard } from 'react-native'
import TextField from './TextField'

export default class TextEditor extends Component {
	
	
	render() {
		console.log('button mode', this.props.buttonMode)
		return (
			<View style={styles.containerStyle}>
				<TextField 
					textValue={this.props.textValue} 
					textChange={this.props.textChange}
					inputStyle={styles.inputStyle}
				/>
				<Button 
					title={this.props.buttonMode}
					onPress={this.props.pasteWithButton}
					style={styles.buttonStyle}
				></Button>
			</View>
		)
	}
}

const styles = {
	containerStyle: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		backgroundColor: 'black'
	},
	buttonStyle: {
		color: 'white',
		backgroundColor: 'aqua',
		padding: 100,
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