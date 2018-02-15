import React, { Component } from 'react'
import {
	View,
	Text,
	Button,
	TouchableOpacity,
	Slider,
	
} from 'react-native'
import Word from './Word'
import Redux from 'redux'
import { connect } from 'react-redux'
import {
	IncrementAction,
	PlayAction,
	PauseAction,
	StopAction,
	SeekPlaceAction
} from '../actions/PlayAction'

//exported so it can be tested without mocking store
export class PlayScreen extends Component {
	constructor(props) {
		super(props)

		this.playPressHandler  = this.playPressHandler.bind(this)
		this.pausePressHandler = this.pausePressHandler.bind(this)
		this.stopPressHandler  = this.stopPressHandler.bind(this)
		this.playWord          = this.playWord.bind(this)
		this.playerUIMode      = this.playerUIMode.bind(this)
		this.slideHandler 	 = this.slideHandler.bind(this)

		this.calculateRemainingReadTime = this.calculateRemainingReadTime.bind(this)
	}

	calculateRemainingReadTime(place, feed) {
		let remainingTime = 0
		for(let i = place; i < feed.length; i++) {
			remainingTime += feed[i].displayTime
		}
		remainingTime *= this.props.speed
		const seconds = (remainingTime/1000) % 60
		const minutes = (((remainingTime / 1000 - seconds)) % 3600) / 60
		return minutes.toFixed().toString() + ':' + seconds.toFixed().toString()
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

	slideHandler(place) {
		this.props.SeekPlaceAction(place)
	}

	playWord(interval, playing, action) {
		this.countdown = setInterval(action, interval)
	}

	componentWillUpdate() {
		const { place, feed } = this.props
		clearInterval(this.countdown)
		// if(place - 1 === feed.length) {
		// 	this.props.PauseAction()
		// }
	}

	// shouldComponentUpdate(nextProps) {
	// 	// if(nextProps.place === this.props.feed.length) {
	// 	// 	return false
	// 	// } else {
	// 	// 	return true
	// 	// }
	// }

	componentDidUpdate() {
		const { place, feed, speed, IncrementAction, playing } = this.props
		const interval = feed[place].displayTime * (speed/50) //temp
		if (this.props.playing) this.playWord(interval, playing, IncrementAction)
	}

	componentWillUnmount() {
		clearInterval(this.countdown)
		this.props.StopAction()
	}

	playerUIMode() {
		const { place, feed, playing } = this.props

		if (playing) {
			return(
				<View className="playing">
					<Text>{feed[place].word}</Text>
					<Button title="pause" onPress={this.pausePressHandler}></Button>
					<Button title="stop" onPress={this.stopPressHandler}></Button>
				</View>
			)
		} else {
			return(
				<View className="not-playing">
					<Text>{feed[place].word}</Text>
					<Slider
						maximumValue={feed.length}
						onValueChange={this.slideHandler}
						value={place}
						step={1}
					/>
					<Text>{`${place} of ${feed.length}`}</Text>
					<Text>{this.calculateRemainingReadTime(place, feed)}</Text>
					<Button title="play" onPress={this.playPressHandler}></Button>
				</View>
			)
		}
	}

	render() {
		return <View><TouchableOpacity>{this.playerUIMode()}</TouchableOpacity></View>
	}
}

const mapStateToProps = state => {
	return {
		playing: state.play.playing,
		place: state.play.place,
		feed: state.feed,
		speed: state.speed
	}
}

export default connect(mapStateToProps, {
	PlayAction,
	PauseAction,
	StopAction,
	IncrementAction,
	SeekPlaceAction
})(PlayScreen)
