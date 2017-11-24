import React, { Component } from 'react'
import { Text, View, Button, TextInput, Keyboard } from 'react-native'
import TextField from './TextField'

export default class TextEditor extends Component {
	render() {
		return (
			<View style={ styles.containerStyle }>
				<TextField 
					textValue={this.props.textValue} 
					textChange={this.props.textChange} 
				/>
				<Button 
					title="Paste" 
					onPress={this.props.pasteWithButton}
				></Button>
			</View>
		)
	}
}

const styles = {
	containerStyle: {
		height: 60,
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		backgroundColor: 'black'
	}
}