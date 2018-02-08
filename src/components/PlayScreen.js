import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import Word from './Word'
import Redux from 'redux'
import { connect } from 'react-redux'
import {
	IncrementAction,
	PlayAction,
	PauseAction,
	StopAction
} from '../actions/PlayAction'

//exported so it can be tested without mocking store
export class PlayScreen extends Component {
	constructor(props) {
		super(props)

		this.playPressHandler  = this.playPressHandler.bind(this)
		this.pausePressHandler = this.pausePressHandler.bind(this)
		this.stopPressHandler  = this.stopPressHandler.bind(this)
		this.playWord          = this.playWord.bind(this)
	}

	playPressHandler() {
		this.props.PlayAction()
	}

	pausePressHandler() {
		this.props.PauseAction()
	}

	stopPressHandler() {
		this.props.StopAction()
	}

	playWord(interval, playing, action) {
		this.countdown = setInterval(action, interval)
	}

	componentWillUpdate() {
		clearInterval(this.countdown)
	}

	componentDidUpdate() {
		const { place, feed, IncrementAction, playing } = this.props
		const interval = feed[place].displayTime
		if (this.props.playing) this.playWord(interval, playing, IncrementAction)
	}

	componentWillUnmount() {
		clearInterval(this.countdown)
		this.props.StopAction()
	}

	render() {
		const { place, feed } = this.props
		return(
			<View>
				<Text>{feed[place].word}</Text>
				<Button title="play" onPress={this.playPressHandler}></Button>
				<Button title="pause" onPress={this.pausePressHandler}></Button>
				<Button title="stop" onPress={this.stopPressHandler}></Button>
			</View>
		)
	}
}

const mapStateToProps = state => {
	return {
		playing: state.play.playing,
		place: state.play.place,
		feed: state.feed
	}
}

export default connect(mapStateToProps, {
	PlayAction,
	PauseAction,
	StopAction,
	IncrementAction
})(PlayScreen)
