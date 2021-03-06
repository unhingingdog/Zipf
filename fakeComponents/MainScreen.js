//Faked due to interference from Navigation when testing orginal component.
//Error seems uncommon
//'should declare a screen' error - Easier to test identical component than
//the hack the original component.

import React, { Component } from 'react'
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	Dimensions
} from 'react-native'
import { connect } from 'react-redux'
import { SubmitTextAction } from '../src/actions/SubmitTextAction'


export class MainScreen extends Component {
	constructor(props) {
		super(props)
		this.state = {
			orientation: 'portrait',
		}

		this.pasteButtonHandler = this.pasteButtonHandler.bind(this)
		this.onLayout = this.onLayout.bind(this)
	}

	static navigationOptions = {
		header: null
	}

	onLayout(e) {
		const { width, height } = Dimensions.get('window')
		const orientation = width > height ? 'landscape' : 'portrait'
		this.setState({ orientation })
	}

	pasteButtonHandler() {
		const { dispatch } = this.props.navigation
		this.props.SubmitTextAction(dispatch)
	}


	render() {
		return (
			<View style={styles.container} onLayout={this.onLayout}>
				<TouchableOpacity
					onPress={this.pasteButtonHandler}
					style={styles.pasteButton}
				>
					<Text style={styles.buttonText}>Paste</Text>
				</TouchableOpacity>
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
	SubmitTextAction,
})(MainScreen)

const styles = StyleSheet.create({
	pasteButton: {
		backgroundColor: 'white',
		alignItems: 'center',
		margin: '10%'
	},
	container: {
		flex: 1,
		backgroundColor: 'white',
		justifyContent: 'center',
	},
	buttonText: {
		fontFamily: 'System',
		fontSize: 80,
		fontWeight: "100"
	},
	subtext: {
		color: 'grey'
	}
})
