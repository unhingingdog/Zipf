import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import Word from './Word'
import Redux from 'redux'
import { connect } from 'react-redux'
import { PlayAction, IncrementAction, StopAction } from '../actions/PlayAction'

//exported so it can be tested without mocking store
export class PlayScreen extends Component {
	constructor(props) {
		super(props)
		this.playPressHandler = this.playPressHandler.bind(this)
		this.stopPressHandler = this.stopPressHandler.bind(this)
		this.toggleCountdown  = this.startPlayer.bind(this)
	}

	playPressHandler() {
		this.props.PlayAction()
	}

	stopPressHandler() {
		this.props.StopAction()
	}

	startPlayer() {
		const { place, feed, IncrementAction, playing } = this.props
		const interval = feed[place].displayTime
		this.countdown = setInterval(IncrementAction, interval)
	}

	componentWillMount() {
		this.startPlayer()
	}

	// componentWillReceiveProps(nextProps) {
	// 	console.log(nextProps)
	// 	if (this.props.playing !== nextProps.playing) {
	// 		switch (!!this.props.playing) {
	// 			case true:
	// 				this.toggleCountdown
	// 			case false:
	// 				this.props.StopAction()
	// 				clearInterval(this.countdown)
	// 		}
	// 	}
	// }

	componentWillUnmount() {
		this.props.StopAction()
		clearInterval(this.countdown)
	}

	render() {
		const { place, feed } = this.props
		return(
			<View>
				<Text>{feed[place].word}</Text>
				<Button title="play" onPress={this.playPressHandler}></Button>
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
	StopAction,
	IncrementAction
})(PlayScreen)
