import React, { Component } from 'react'
import Redux from 'redux'
import { connect } from 'react-redux'
import {
	View,
	Text,
	TouchableOpacity,
	Slider,
	Button,
	Switch
} from 'react-native'

import {
	IncrementAction,
	PlayAction,
	PauseAction,
	StopAction,
	SeekPlaceAction,
} from '../actions/PlayAction'
import { ChangeSpeedAction } from '../actions/ChangeSpeedAction'

//exported so it can be tested without mocking store
export class PlayScreen extends Component {
	constructor(props) {
		super(props)
		this.state = { speedSliderMode: false }

		this.playPressHandler  = this.playPressHandler.bind(this)
		this.pausePressHandler = this.pausePressHandler.bind(this)
		this.stopPressHandler  = this.stopPressHandler.bind(this)
		this.playWord          = this.playWord.bind(this)
		this.playerUIMode      = this.playerUIMode.bind(this)

		this.placeSliderHandler 	 = this.placeSliderHandler.bind(this)
		this.speedSliderHandler 	 = this.speedSliderHandler.bind(this)
		this.renderSlider 	 		   = this.renderSlider.bind(this)

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

	sliderPicker(mode) {
		this.setState({ speedSliderMode: mode })
	}

	placeSliderHandler(place) {
		console.log('sliding')
		this.props.SeekPlaceAction(place)
	}

	speedSliderHandler(speed) {
		this.props.SeekPlaceAction(speed)
	}

	renderSlider() {
		console.log(this.props.speed)
		if(this.state.speedSliderMode) {
			return (<Slider
				maximumValue={100}
				onSlidingComplete={this.props.ChangeSpeedAction}
				value={this.props.speed}
				step={1}
			/>)
		} else {
			return (<Slider
				maximumValue={this.props.feed.length}
				onValueChange={this.props.SeekPlaceAction}
				value={this.props.place}
				step={1}
			/>)
		}
	}

	playWord(interval, playing, action) {
		this.countdown = setInterval(action, interval)
	}

	componentWillUpdate() {
		const { place, feed } = this.props
		clearInterval(this.countdown)
		if(place - 2 === feed.length) {
			this.props.PauseAction()
		}
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
		const { place, feed, playing, speed } = this.props

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
					<View>{this.renderSlider()}</View>
					<Button title="place" onPress={() => this.sliderPicker(false)} />
					<Button title="speed" onPress={() => this.sliderPicker(true)} />
					<Text>{`${place} of ${feed.length}`}</Text>
					<Text>Insert WPM</Text>
					<Text>{this.calculateRemainingReadTime(place, feed)}</Text>
					<Text>{`Speed: ${speed}`}</Text>
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
	SeekPlaceAction,
	ChangeSpeedAction
})(PlayScreen)
