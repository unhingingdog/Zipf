import React, { Component } from 'react'
import { Text, View, Button, Slider } from 'react-native'

export default class PausedMode extends Component {
  constructor(props) {
    super(props)
    this.state = { speedSliderMode: false }

    this.placeSliderHandler 	 = this.placeSliderHandler.bind(this)
    this.renderSlider 	 		   = this.renderSlider.bind(this)
    this.calculateRemainingReadTime = this.calculateRemainingReadTime.bind(this)

  }

  calculateRemainingReadTime(place, feed, speed) {
    let remainingTime = 0
    for(let i = place; i < feed.length; i++) {
      remainingTime += feed[i].displayTime
    }
    remainingTime *= speed
    let seconds = (remainingTime/1000) % 60
    const minutes = (((remainingTime / 1000 - seconds)) % 3600) / 60
    seconds = seconds.toFixed().toString().length < 2 ?
      '0' + seconds.toFixed().toString() : seconds.toFixed().toString()
    return minutes.toFixed().toString() + ':' + seconds
  }

  sliderPicker(mode) {
    this.setState({ speedSliderMode: mode })
  }

  placeSliderHandler(place) {
    this.props.seek(place)
  }

  renderSlider() {
    if(this.state.speedSliderMode) {
      return (<Slider
        maximumValue={100}
        onSlidingComplete={this.props.changeSpeed}
        value={this.props.speed}
        step={1}
      />)
    } else {
      return (<Slider
        maximumValue={this.props.feed.length}
        onValueChange={this.placeSliderHandler}

        value={this.props.place}
        step={1}
      />)
    }
  }

  render() {
    const { word, place, speed, feed, startPlaying, revert } = this.props

    return (
      <View>
        <Text>{word}</Text>
        <View>{this.renderSlider()}</View>
        <Button title="place" onPress={() => this.sliderPicker(false)} />
        <Button title="speed" onPress={() => this.sliderPicker(true)} />
        <Text>{`${place} of ${feed.length}`}</Text>
        <Text>Insert WPM</Text>
        <Text>{this.calculateRemainingReadTime(place, feed, speed)}</Text>
        <Text>{`Speed: ${speed}`}</Text>
        <Button title="play" onPress={startPlaying}></Button>
        <Button title="stop" onPress={revert}></Button>
      </View>
    )
  }
}
