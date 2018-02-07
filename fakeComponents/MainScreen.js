//Faked due to interference from Navigation when testing orginal component.
//Error seems uncommon
//'should declare a screen' error - Easier to test identical component than
//the hack the original component.

import React, { Component } from 'react'
import { View, Text, Button, Clipboard } from 'react-native'
import { connect } from 'react-redux'
import { TextChangedAction } from '../src/actions/TextChangedAction'
import {
	SubmitTextAction,
	SubmitTextFromEditorAction
} from '../src/actions/SubmitTextAction'
import PasteButton from '../src/components/PasteButton'
import TextEditor from '../src/components/TextEditor'

export class MainScreen extends Component {
	constructor(props) {
		super(props)
		this.state = { inputType: 'paste' }

		this.selectInputType    = this.selectInputType.bind(this)
		this.renderInputType    = this.renderInputType.bind(this)
		this.changeTextHandler  = this.changeTextHandler.bind(this)
		this.pasteButtonHandler = this.pasteButtonHandler.bind(this)
		this.formSubmitHandler  = this.formSubmitHandler.bind(this)
	}

	static navigationOptions = {
		header: null
	}

	changeTextHandler(text) {
		this.props.TextChangedAction(text)
	}

	pasteButtonHandler() {
		const { dispatch } = this.props.navigation
		this.props.SubmitTextAction(dispatch)
	}

	formSubmitHandler() {
		const { dispatch } = this.props.navigation
		this.props.SubmitTextFromEditorAction(dispatch, this.props.text)
	}

	selectInputType(inputType) {
		this.setState({ inputType })
	}

	renderInputType() {
		const paste = <PasteButton
			buttonMode={this.props.buttonMode}
			textValue={this.props.text}
			textChange={this.changeTextHandler}
			pasteWithButton={this.pasteButtonHandler}
		/>

		const text = 	<TextEditor
			textValue={this.props.text}
			textChange={this.changeTextHandler}
			submitText={this.formSubmitHandler}
		/>

		switch(this.state.inputType) {
			case 'paste':
				return paste
			case 'text':
				return text
			case 'voice':
				return <Text>Watson voice to text to be implemeneted</Text>
			default:
				return paste
		}
	}

	render() {
		return (
			<View>
				{this.renderInputType()}
				<Button
					className="textModeButton"
					title="Input text"
					onPress={() => this.selectInputType('text')}
				/>
				<Button
					className="speakModeButton"
					title="Speak"
					onPress={() => this.selectInputType('voice')}
				/>
				<Button
					className="pasteModeButton"
					title="paste from clipboard"
					onPress={() => this.selectInputType('paste')}
				/>
			</View>
		)
	}
}

const mapStateToProps = state => {
 return	{
		text: state.textInput.text
 	}
}

export default connect(mapStateToProps, {
	TextChangedAction,
	SubmitTextAction,
	SubmitTextFromEditorAction
})(MainScreen)