import React, { Component } from 'react'
import { View, Text, Button, Clipboard, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { TextChangedAction } from '../actions/TextChangedAction'
import {
	SubmitTextAction,
	SubmitTextFromEditorAction
} from '../actions/SubmitTextAction'


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
				<Button
					title="Paste"
					onPress={this.pasteButtonHandler}
					//style={styles.buttonStyle}
				></Button>
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
