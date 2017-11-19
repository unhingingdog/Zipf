import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import { testAction } from '../actions/testAction'
import TextEditor  from './TextEditor'

class PlayScreen extends Component {
	constructor(props) {
		super(props)
		this.pressHandler = this.pressHandler.bind(this)
	}
	
	pressHandler() {
		this.props.testAction()
	}
	
	render() {
		return(<TextEditor test={this.props.test} pressHandler={this.pressHandler} />)
	}
}

const mapStateToProps = state => {
 return	{ 
	 test: state.textReducer.test,
 	}
}

export default connect(mapStateToProps, { testAction })(PlayScreen)