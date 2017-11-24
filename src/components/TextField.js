import React, { Component } from 'react'
import { TextInput, Keyboard } from 'react-native'

const TextEditor = (props) => { 
	return(
		<TextInput 
			style={styles.inputStyle}
			value={props.textValue}
			onChangeText={props.textChange}
			multiline={true}
			numberOfLines={8}
			borderColor={'black'}
			borderWidth={1}
			onSubmitEditing={Keyboard.dismiss}
			blurOnSubmit={true}
			keyboardType={'web-search'}
		/>
	)
}

	styles = {
		inputStyle: {
			color: 'black',
			paddingRight: 5,
			paddingLeft: 5,
			fontSize: 18,
			lineHeight: 23,
			flex: 3,
			backgroundColor: 'white',
			margin: 10,
			borderRadius: 5
		}
	}

export default TextEditor
