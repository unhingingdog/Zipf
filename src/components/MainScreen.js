import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import { TextChangedAction } from '../actions/testAction'
import TextEditor  from './TextEditor'

class MainScreen extends Component {
	constructor(props) {
		super(props)
		this.pressHandler = this.pressHandler.bind(this)
	}
	
	pressHandler() {
		this.props.testAction()
	}
	
	render() {
		return(<TextEditor pressHandler={this.pressHandler} />)
	}
}

const mapStateToProps = state => {
 return	{ 
		text
 	}
}

export default connect(mapStateToProps, { testAction })(MainScreen)