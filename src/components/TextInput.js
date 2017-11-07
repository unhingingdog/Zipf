import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

class TextInput extends Component {
	render() {
		return(
			<Text>Text Input</Text>
		)
	}
}

const mapStateToProps = state => {
	return {}
}

export default connect(mapStateToProps)(TextInput)