import React, { Component } from 'react'
import { View, Text, Button, Clipboard, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { TextChangedAction } from '../actions/TextChangedAction'
import {
	SubmitTextAction,
	SubmitTextFromEditorAction
} from '../actions/SubmitTextAction'
import PasteButton from './PasteButton'
import TextEditor from './TextEditor'

export class MainScreen extends Component {
	constructor(props) {
		super(props)
		this.pasteButtonHandler = this.pasteButtonHandler.bind(this)
	}

	static navigationOptions = {
		header: null
	}

	pasteButtonHandler() {
		const { dispatch } = this.props.navigation
		this.setState({ loading: true })
		this.props.SubmitTextAction(dispatch)
		this.setState({ loading: false })
	}

	render() {
		return (
			<View>
				<PasteButton
					buttonMode={this.props.buttonMode}
					textValue={this.props.text}
					textChange={this.changeTextHandler}
					pasteWithButton={this.pasteButtonHandler}
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

const styles = StyleSheet.create({

})
