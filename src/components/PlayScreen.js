import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

class PlayScreen extends Component {
	render() {
		return(
			<Text>Play</Text>
		)
	}
}

const mapStateToProps = state => {
	return {}
}

export default connect(mapStateToProps)(PlayScreen)