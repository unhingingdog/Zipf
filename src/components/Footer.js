import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default class Footer extends Component {
  constructor(props) {
    super(props)
    this.calculateRemainingReadTime = this.calculateRemainingReadTime.bind(this)
    this.calculateWordsPerMinute = this.calculateWordsPerMinute.bind(this)
  }

  calculateRemainingReadTime(place, feed, speed) {
    //const maxDisplayTime = feed[place].displayTime
    //const interval = (maxDisplayTime / 100) * (100 - speed)

    let remainingTime = 0
    for(let i = place; i < feed.length; i++) {
      remainingTime += (feed[i].displayTime / 100) * (100 - speed)
    }
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
      totalTime,
      feed,
      speed,
      place
    } = this.props

    return(
      <View style={styles.container}>
        <View style={styles.footer}>
          <Text style={styles.wpm}>{this.calculateWordsPerMinute(totalTime, feed.length, speed)}</Text>
          <View style={styles.remainingTime}>
            <Ionicons name="ios-time-outline" size={30} style={styles.clock} />
            <Text>{this.calculateRemainingReadTime(place, feed, speed)}</Text>
          </View>
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    alignSelf: 'baseline',
    alignSelf: 'flex-end'
  },
  footer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  remainingTime: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  clock: {
    paddingRight: 5
  },
  wpm: {
    marginLeft: 10,
  }
})
