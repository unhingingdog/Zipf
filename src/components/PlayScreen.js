import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Redux from 'redux'
import { connect } from 'react-redux'

class PlayScreen extends Component {
	render() {
		return <Text>Shitbar</Text>
	}
}

const mapStateToProps = state => {
	return{}
}

export default connect(mapStateToProps, {})(PlayScreen)