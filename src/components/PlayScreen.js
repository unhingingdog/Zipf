import React, { Component } from 'react'
import Redux from 'redux'
import { connect } from 'react-redux'

import {
	View,
	StyleSheet,
	Dimensions
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
		this.state = { speedSliderMode: false, orientation: 'portrait' }

		this.incrementWord 		 = this.incrementWord.bind(this)
		this.startPlaying 		 = this.startPlaying.bind(this)
		this.backButtonHandler = this.backButtonHandler.bind(this)
		this.onLayout = this.onLayout.bind(this)
	}

	static navigationOptions = {
		header: null
  }

	onLayout(e) {
		const { width, height } = Dimensions.get('window')
		const orientation = width > height ? 'landscape' : 'portrait'
		this.setState({ orientation })
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
		const maxDisplayTime = feed[place].displayTime

		const interval = (maxDisplayTime / 100) * (100 - speed)

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
				<Playing
					word={feed[place].word}
					pause={this.props.PauseAction}
					orientation={this.state.orientation}
				/>
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
				orientation={this.state.orientation}
			/>
		}
		return(
			<View style={styles.style} onLayout={this.onLayout}>
				{renderMode}
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

const styles = StyleSheet.create({
	style: {
		paddingTop: 15,
		flex: 1,
		backgroundColor: 'white'
	 }
})
