import React, { Component } from 'react'
import {
  Text,
  View,
  Slider,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

import PausedWord from './PausedWord'
import SpeedPanel from './SpeedPanel'
import Button from './Button'

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
    this.renderSlider 	 		        = this.renderSlider.bind(this)
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
    const twoWordsPrevious = feed[place - 2] ? feed[place + 1].word : ' '
    const twoWordsAhead = feed[place + 2] ? feed[place + 1].word : ' '
    this.setState({ sliderWordPreview: [
      previousWord,
      currentWord,
      nextWord,
      twoWordsPrevious,
      twoWordsAhead
    ]})
  }

  placeSliderFinishedHandler(place) {
    this.setState({ placeSliderActive: false })
    this.props.seek(place)
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
        style={styles.placeSlider}
        maximumValue={this.props.feed.length - 1}
        onValueChange={this.placeSliderActiveHandler}
        onSlidingComplete={this.placeSliderFinishedHandler}
        value={this.props.place}
        step={1}
        minimumTrackTintColor="orange"
      />)
    }
  }

  render() {
    const {
      place,
      speed,
      feed,
      word,
      totalTime,
      startPlaying,
      revert,
      back,
      orientation
    } = this.props

    const {
      sliderWordPreview,
      placeSliderActive
    } = this.state

    return (
      <View style={styles.container}>
        <View style={styles.headerButtons}>
          <Button
            iconName="ios-arrow-dropleft-outline"
            size={50}
            action={back}
          />
          <Text>{`${place + 1} of ${feed.length + 1}`}</Text>
          <Button
            iconName="ios-refresh-circle-outline"
            size={50}
            action={revert}
          />
        </View>
        <TouchableOpacity style={styles.wordContainer} onPress={startPlaying}>
          <PausedWord
            word={word}
            place={place}
            sliderWordPreview={sliderWordPreview}
            orientation={orientation}
            placeSliderActive={placeSliderActive}
          />
        </TouchableOpacity>
        <View style={styles.sliderPickerContainer}>
          {this.renderSlider()}
        </View>

        <Button title="place" onPress={() => this.sliderPicker(false)} />
        <Button title="speed" onPress={() => this.sliderPicker(true)} />
        <SpeedPanel
          place={place}
          feed={feed}
          speed={speed}
          totalTime={totalTime}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
	container: {
    margin: 10,
  },
  headerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  wordContainer: {
    minHeight: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  sliderPickerContainer: {
    margin: 8
  },
  sliderPicker: {

  },
  activeWord: {

  },
  placeSlider: {

  }
})
