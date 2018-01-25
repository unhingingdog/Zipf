import React, { Component } from 'react'
import { View, Text, Button, Clipboard } from 'react-native'
import { connect } from 'react-redux'
import { TextChangedAction } from '../actions/TextChangedAction'
import { SubmitTextAction } from '../actions/SubmitTextAction'
import TextEditor  from './TextEditor'

class MainScreen extends Component {
	constructor(props) {
		super(props)
		this.changeTextHandler = this.changeTextHandler.bind(this)
		this.pasteButtonHandler = this.pasteButtonHandler.bind(this)
	}

	static navigationOptions = {
		header: null
	}

	changeTextHandler(text) {
		this.props.TextChangedAction(text)
	}

	pasteButtonHandler() {
		this.props.SubmitTextAction(this.props.navigation.dispatch)

	}

	render() {
		return(
			<TextEditor
				buttonMode={this.props.buttonMode}
				textValue={this.props.text}
				textChange={this.changeTextHandler}
				pasteWithButton={this.pasteButtonHandler}
			/>
		)
	}
}

const mapStateToProps = state => {
 return	{
		text: state.textInput.text,
	 	navState: state.navigation
 	}
}

export default connect(mapStateToProps, {
	TextChangedAction,
	SubmitTextAction
})(MainScreen)
