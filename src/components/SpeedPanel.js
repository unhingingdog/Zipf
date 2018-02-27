import React,{ Component } from 'react'
import { View, Text } from 'react-native'

export default class SpeedPanel extends Component {
  constructor(props) {
    super(props)
    this.calculateRemainingReadTime = this.calculateRemainingReadTime.bind(this)
    this.calculateWordsPerMinute = this.calculateWordsPerMinute.bind(this)
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

  render() {
    const {
      place,
      feed,
      speed,
      totalTime
    } = this.props

    return(
      <View>
        <Text>{this.calculateWordsPerMinute(totalTime, feed.length, speed)}</Text>
        <Text>{this.calculateRemainingReadTime(place, feed, speed)}</Text>
        <Text>{`Speed: ${speed}`}</Text>
      </View>
    )
  }
}
