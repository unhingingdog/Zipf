import React, { Component } from 'react'
import { Text, View, Button, Slider, StyleSheet } from 'react-native'

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
    this.calculateWordsPerMinute    = this.calculateWordsPerMinute.bind(this)

  }

  calculateRemainingReadTime(place, feed, speed) {
    let remainingTime = 0
    for(let i = place; i < feed.length; i++) {
      remainingTime += feed[i].displayTime
    }
    remainingTime *= (100 - speed) / 100
    let seconds = (remainingTime/1000) % 60
    const minutes = (((remainingTime / 1000 - seconds)) % 3600) / 60
    seconds = seconds.toFixed().toString().length < 2 ?
      '0' + seconds.toFixed().toString() : seconds.toFixed().toString()
    return minutes.toFixed().toString() + ':' + seconds
  }

  calculateWordsPerMinute(totalTime, numberOfWords, speed) {
    const timeInMinutes = (totalTime / 60000) * ((100 - speed) / 100)
    return (numberOfWords / timeInMinutes).toFixed().toString() + ' WPM'
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
        maximumValue={99}
        minimumValue={40}
        onSlidingComplete={this.props.changeSpeed}
        value={this.props.speed}
        step={1}
      />)
    } else {
      return (<Slider
        maximumValue={this.props.feed.length - 1}
        onValueChange={this.placeSliderActiveHandler}
        onSlidingComplete={this.placeSliderFinishedHandler}
        value={this.props.place}
        step={1}
      />)
    }
  }

  render() {
    const { place, speed, feed, totalTime, startPlaying, revert } = this.props

    return (
      <View>
        <Button title="<=" onPress={this.props.back} />
        {this.renderWord()}
        <View>{this.renderSlider()}</View>
        <Button title="place" onPress={() => this.sliderPicker(false)} />
        <Button title="speed" onPress={() => this.sliderPicker(true)} />
        <Text>{`${place + 1} of ${feed.length + 1}`}</Text>
        <Text>{this.calculateWordsPerMinute(totalTime, feed.length, speed)}</Text>
        <Text>{this.calculateRemainingReadTime(place, feed, speed)}</Text>
        <Text>{`Speed: ${speed}`}</Text>
        <Button id="play" title="play" onPress={startPlaying}></Button>
        <Button title="stop" onPress={revert}></Button>
      </View>
    )
  }
}
