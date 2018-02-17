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

//exported so it can be tested without mocking store
export class PlayScreen extends Component {
	constructor(props) {
		super(props)
		this.state = { speedSliderMode: false }
		this.incrementWord     = this.incrementWord.bind(this)
	}

	incrementWord(interval, playing, action) {
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
		if (this.props.playing) this.incrementWord(interval, playing, IncrementAction)
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
				feed={feed}
				playing={playing}
				speed={speed}
				startPlaying={PlayAction}
				revert={StopAction}
				seek={SeekPlaceAction}
				changeSpeed={ChangeSpeedAction}
			/>
		}
		return <View>{renderMode}</View>
	}
}

const mapStateToProps = state => {
	return {
		playing: state.play.playing,
		place: state.play.place,
		feed: state.feed,
		speed: state.speed,
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
