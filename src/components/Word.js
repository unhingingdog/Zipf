import React, { Component } from 'react'
import { Text } from 'react-native'

export default class Word extends Component {
	render() {
		return <Text>{this.props.children}</Text>
	}
}