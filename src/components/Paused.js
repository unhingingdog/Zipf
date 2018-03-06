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
import Footer from './Footer'

export default class PausedMode extends Component {
  constructor(props) {
    super(props)
    this.state = {
      placeSliderActive: false,
      sliderWordPreview: []
    }

    this.placeSliderActiveHandler 	= this.placeSliderActiveHandler.bind(this)
    this.placeSliderFinishedHandler = this.placeSliderFinishedHandler.bind(this)
  }

  placeSliderActiveHandler(place) {
    const { feed } = this.props
    this.setState({ placeSliderActive: true })
    const currentWord = feed[place] ? feed[place].word : ' '
    const previousWord = feed[place - 1] ? feed[place - 1].word : ' '
    const nextWord = feed[place + 1] ? feed[place + 1].word : ' '
    const twoWordsPrevious = feed[place - 2] ? feed[place + -2].word : ' '
    const twoWordsAhead = feed[place + 2] ? feed[place + 2].word : ' '
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
      orientation,
      changeSpeed
    } = this.props

    const {
      sliderWordPreview,
      placeSliderActive
    } = this.state

    const styles = orientation === 'portrait' ?
      portraitStyles : landscapeStyles

    return (
      <View style={styles.container}>
        <View style={styles.headerButtons}>
          <Button
            iconName="ios-arrow-dropleft-outline"
            size={50}
            action={back}
          />
          <Text>{`${place + 1} of ${feed.length}`}</Text>
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
        <Slider
          style={styles.placeSlider}
          maximumValue={this.props.feed.length - 1}
          onValueChange={this.placeSliderActiveHandler}
          onSlidingComplete={this.placeSliderFinishedHandler}
          value={this.props.place}
          step={1}
          minimumTrackTintColor="orange"
        />
        </View>
        <SpeedPanel
          place={place}
          feed={feed}
          speed={speed}
          totalTime={totalTime}
          changeSpeed={changeSpeed}
        />
        <Footer
          totalTime={totalTime}
          feed={feed}
          speed={speed}
          place={place}
        />
      </View>
    )
  }
}
const portraitStyles = StyleSheet.create({
	container: {
    margin: 10,
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  headerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  wordContainer: {
    minHeight: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '7%'
  },
  sliderPickerContainer: {
    margin: 8
  }
})

const landscapeStyles = StyleSheet.create({
	container: {
    margin: 10,
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  headerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  wordContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '7%'
  },
  sliderPickerContainer: {
    margin: 8
  }
})
