import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import Word from './Word'
import textEngine from '../textEngine'
import Redux from 'redux'
import { connect } from 'react-redux'
import { PlayAction } from '../actions/PlayAction'

class PlayScreen extends Component {
	constructor(props) {
		super(props)
		this.playPressHandler = this.playPressHandler.bind(this)
	}
	
	playPressHandler() {
		this.props.PlayAction()
		console.log(this.props.playing)
	}
	
	render() {
		let { text, place } = this.props
		let word = textEngine(text, place)
		return(
			<View>
				<Word>{word}</Word>
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

export default connect(mapStateToProps, { PlayAction })(PlayScreen)