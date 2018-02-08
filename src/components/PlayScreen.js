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
		console.log('constructor fired')
		this.playPressHandler = this.playPressHandler.bind(this)
		this.stopPressHandler = this.stopPressHandler.bind(this)
		this.playWord         = this.playWord.bind(this)
	}

	playPressHandler() {
		this.props.PlayAction()
	}

	stopPressHandler() {
		this.props.StopAction()
	}

	playWord(interval, playing, action) {
		console.log(interval, this.props.feed[interval])
		this.countdown = setInterval(action, interval)
	}

	componentWillMount() {
		console.log('component will mount')
	}

	componentDidMount() {
		console.log('component did mount')
	}

	componentWillReceiveProps(nextProps) {
		console.log('component receiving props')
		console.log(nextProps.place)
	}

	shouldComponentUpdate() {
		console.log('should component update')
		return true
	}

	componentWillUpdate(nextProps, nextState) {
		console.log('component will update')
		clearInterval(this.countdown)
		console.log(nextProps.playing)
	}

	componentDidUpdate() {
		console.log('component updated')
		const { place, feed, IncrementAction, playing } = this.props
		const interval = feed[place].displayTime
		if (this.props.playing) this.playWord(interval, playing, IncrementAction)
	}


	componentWillUnmount() {
		console.log('component unmounted')
		// this.props.StopAction()
		// clearInterval(this.countdown)
	}

	render() {
		console.log('rendering')
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
