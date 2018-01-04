import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import Word from './Word'
import textEngine from '../textEngine'
import Redux from 'redux'
import { connect } from 'react-redux'
import { PlayAction, IncrementAction } from '../actions/PlayAction'

class PlayScreen extends Component {
	constructor(props) {
		super(props)
		this.playPressHandler = this.playPressHandler.bind(this)
		this.incrementHandler = this.incrementHandler.bind(this)
	}
	
	playPressHandler() {
		this.props.PlayAction()
	}
	
	incrementHandler() {
		this.props.IncrementAction()
		console.log("Incremented")
	}
	
	render() {
		let { text, place } = this.props
		let word = text.split(' ')[place]
		return(
			<View>
				<Button title="Increment" onPress={this.incrementHandler}></Button>
				<Text>{word}</Text>
				<Button title="play" onPress={this.playPressHandler}></Button>
			</View>
		)
	}
}

const mapStateToProps = state => {
	return {
		text: state.textInput.text,
		playing: state.play.playing,
		place: state.play.place,
	}
}

export default connect(mapStateToProps, { 
	PlayAction,
	IncrementAction
})(PlayScreen)