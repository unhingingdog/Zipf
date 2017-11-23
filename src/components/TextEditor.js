import React, { Component } from 'react'
import { Text, View, Button, TextInput } from 'react-native'

export default class TextEditor extends Component {
	render() {
		return (
			<View style={ styles.containerStyle }>
				<TextInput 
					style={styles.inputStyle}
					value={this.props.textValue}
					onChangeText={this.props.textChange}
				/>
				<Button title="Paste" onPress={this.props.pressHandler}></Button>
			</View>
		)
	}
}

const styles = {
	inputStyle: {
		color: 'black',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		lineHeight: 23,
		flex: 3
	},
	containerStyle: {
		height: 40,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	}
}