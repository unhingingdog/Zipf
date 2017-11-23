import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import { TextChangedAction } from '../actions/TextChangedAction'
import TextEditor  from './TextEditor'

class MainScreen extends Component {
	constructor(props) {
		super(props)
		this.changeTextHandler = this.changeTextHandler.bind(this)
	}
	
	changeTextHandler(text) {
		this.props.TextChangedAction(text)
	}
	
	render() {
		return(
			<TextEditor 
				textValue={this.props.text}
				textChange={this.changeTextHandler}
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