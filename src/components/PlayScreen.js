import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import { testAction } from '../actions/testAction'

class PlayScreen extends Component {
	constructor(props) {
		super(props)
		this.pressHandler = this.pressHandler.bind(this)
	}
	
	pressHandler() {
		this.props.testAction()
	}
	
	render() {
		return(
			<View style={{ paddingTop: 50 }}>
				<Text>{this.props.test}</Text>
				<Button title="some shit" onPress={this.pressHandler}></Button>
			</View>
		)
	}
}

const mapStateToProps = state => {
 return	{ 
	 test: state.textReducer.test,
 	}
}

export default connect(mapStateToProps, { testAction })(PlayScreen)