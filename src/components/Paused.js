import React, { Component } from 'react'
import { Text, View, Button, Slider } from 'react-native'

export default class PausedMode extends Component {
  constructor(props) {
    super(props)
    this.state = {
      speedSliderMode: false,
      placeSliderActive: false,
      sliderWordPreview: []
    }

    this.placeSliderActiveHandler 	= this.placeSliderActiveHandler.bind(this)
    this.placeSliderFinishedHandler = this.placeSliderFinishedHandler.bind(this)
    this.renderWord                 = this.renderWord.bind(this)
    this.renderSlider 	 		        = this.renderSlider.bind(this)
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

  placeSliderActiveHandler(place) {
    const { feed } = this.props
    this.setState({ placeSliderActive: true })
    const currentWord = feed[place] ? feed[place].word : ' '
    const previousWord = feed[place - 1] ? feed[place - 1].word : ' '
    const nextWord = feed[place + 1] ? feed[place + 1].word : ' '
    this.setState({ sliderWordPreview: [previousWord, currentWord, nextWord] })
  }

  placeSliderFinishedHandler(place) {
    this.setState({ placeSliderActive: false })
    this.props.seek(place)
  }

  renderWord() {
   if (this.state.placeSliderActive) {
     return(
      <View>
        <Text>{this.state.sliderWordPreview[0]}</Text>
        <Text>{this.state.sliderWordPreview[1]}</Text>
        <Text>{this.state.sliderWordPreview[2]}</Text>
      </View>
     )
   } else {
     return <Text>{this.props.word}</Text>
   }
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
        onValueChange={this.placeSliderActiveHandler}
        onSlidingComplete={this.placeSliderFinishedHandler}
        value={this.props.place}
        step={1}
      />)
    }
  }

  render() {
    const { place, speed, feed, startPlaying, revert } = this.props

    return (
      <View>
        <View>{this.renderWord()}</View>
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
