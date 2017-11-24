import React, { Component } from 'react'
import { View, Text, Button, Clipboard } from 'react-native'
import { connect } from 'react-redux'
import { TextChangedAction } from '../actions/TextChangedAction'
import TextEditor  from './TextEditor'

class MainScreen extends Component {
	constructor(props) {
		super(props)
		this.changeTextHandler = this.changeTextHandler.bind(this)
		this.pasteButtonHandler = this.pasteButtonHandler.bind(this)
	}
	
	changeTextHandler(text) {
		this.props.TextChangedAction(text)
	}
	
	async pasteButtonHandler() {
		const content = await Clipboard.getString()
		this.props.TextChangedAction(content)
	}
	
	render() {
		return(
			<TextEditor 
				textValue={this.props.text}
				textChange={this.changeTextHandler}
				pasteWithButton={this.pasteButtonHandler}
			/>
		)
	}
}

const mapStateToProps = state => {
 return	{ 
		text: state.textInput.text
 	}
}

export default connect(mapStateToProps, {
	TextChangedAction
})(MainScreen)