import React, { Component } from 'react'
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	Dimensions,
	Image
} from 'react-native'
import { connect } from 'react-redux'
import { SubmitTextAction } from '../actions/SubmitTextAction'


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
				<TouchableOpacity style={styles.logoButton}>
					<Image
						source={require('../assets/zipf-logo-small.png')}
						style={styles.logo}
					/>
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
	container: {
		flex: 1,
		backgroundColor: 'white',
		justifyContent: 'center',
	},
	pasteButton: {
		flex: 9,
		flexDirection: 'column',
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
		margin: '10%',
		paddingTop: '12%'
	},
	buttonText: {
		fontFamily: 'System',
		fontSize: 80,
		fontWeight: "bold"
	},
	logoButton: {
		flexDirection: 'row',
		flex: 1,
		alignSelf: 'flex-end',
		alignItems: 'flex-end',
		justifyContent: 'flex-end',
		padding: 10
	},
	logo: {
		width: 70,
		height: 70
	}
})
