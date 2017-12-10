import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Redux from 'redux'
import { connect } from 'react-redux'

class PlayScreen extends Component {
	render() {
		return <Text>{this.props.text}</Text>
	}
}

const mapStateToProps = state => {
	return {
		text: state.textInput.text
	}
}

export default connect(mapStateToProps, {})(PlayScreen)