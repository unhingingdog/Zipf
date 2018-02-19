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
import Playing from './Playing'
import Paused from './Paused'

import {
	IncrementAction,
	PlayAction,
	PauseAction,
	StopAction,
	SeekPlaceAction,
} from '../actions/PlayAction'
import { ChangeSpeedAction } from '../actions/ChangeSpeedAction'
import NavToHomeAction from '../actions/NavToHomeAction'

//exported so it can be tested without mocking store
export class PlayScreen extends Component {
	constructor(props) {
		super(props)
		this.state = { speedSliderMode: false }

		this.incrementWord 		 = this.incrementWord.bind(this)
		this.startPlaying 		 = this.startPlaying.bind(this)
		this.backButtonHandler = this.backButtonHandler.bind(this)
	}

	static navigationOptions = {
		header: null
  }

	incrementWord(interval, playing, action) {
		this.countdown = setInterval(action, interval)
	}

	backButtonHandler() {
		if(this.countdown) clearInterval(this.countdown)
		this.props.NavToHomeAction()
	}

	startPlaying() {
		if(this.props.place === this.props.feed.length - 1) {
			this.props.SeekPlaceAction(0)
			this.props.PlayAction()
		} else {
			this.props.PlayAction()
		}
	}

	componentWillUpdate(nextProps) {
		clearInterval(this.countdown)
	}

	componentDidUpdate() {
		const { place, feed, speed, IncrementAction, playing, PauseAction } = this.props
		const interval = feed[place].displayTime * (speed/50) //temp

		if (place == feed.length - 1) {
			 setTimeout(PauseAction, interval)
		} else {
			if (this.props.playing) this.incrementWord(interval, playing, IncrementAction)
		}
	}

	componentWillUnmount() {
		clearInterval(this.countdown)
		this.props.StopAction()
	}

	render() {
		const {
			feed,
			place,
			speed,
			totalTime,
			playing,
			PlayAction,
			StopAction,
			SeekPlaceAction,
			ChangeSpeedAction
		} = this.props

		let renderMode

		if (this.props.playing) {
			renderMode =
				<Playing word={feed[place].word} pause={this.props.PauseAction} />
		} else {
			renderMode = <Paused
				word={feed[place].word}
				place={place}
				feed={feed}
				totalTime={totalTime}
				playing={playing}
				speed={speed}
				startPlaying={this.startPlaying}
				revert={StopAction}
				seek={SeekPlaceAction}
				changeSpeed={ChangeSpeedAction}
				back={this.backButtonHandler}
			/>
		}
		return (
			<View>
				<View>{renderMode}</View>
			</View>
		)
	}
}

const mapStateToProps = state => {
	return {
		playing: state.play.playing,
		place: state.play.place,
		feed: state.feed. feed,
		totalTime: state.feed.totalDisplayTime,
		speed: state.speed,
	}
}

export default connect(mapStateToProps, {
	PlayAction,
	PauseAction,
	StopAction,
	IncrementAction,
	SeekPlaceAction,
	ChangeSpeedAction,
	NavToHomeAction
})(PlayScreen)
