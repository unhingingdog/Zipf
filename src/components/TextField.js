import React, { Component } from 'react'
import { TextInput, Keyboard } from 'react-native'

const TextEditor = (props) => { 
	return(
		<TextInput 
			style={props.inputStyle}
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

	}

export default TextEditor
