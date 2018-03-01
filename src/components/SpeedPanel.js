import React,{ Component } from 'react'
import { View, Text, Slider, StyleSheet } from 'react-native'
import Button from './Button'
import { Ionicons } from '@expo/vector-icons'

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
      totalTime,
      changeSpeed
    } = this.props

    // <Slider
    //   maximumValue={99}
    //   minimumValue={40}
    //   onSlidingComplete={this.props.changeSpeed}
    //   value={this.props.speed}
    //   step={1}
    // />

    //ios-car
    //ios-car-outline
    // ios-jet ios-jet-outline
    //ios-walk
    //ios-flash-outline
    //ios-bicycle

    return(
      <View style={styles.container}>
        <View style={styles.speedChooser}>
          <Button
            iconName="ios-arrow-dropleft-outline"
            size={50}
            action={() => changeSpeed(speed + 1)}
          />
          <View style={styles.speedDisplay}>
            <Text style={styles.speed} >{speed}</Text>
            <Text style={styles.speedLabel} >Speed</Text>
          </View>
          <Button
            iconName="ios-arrow-dropleft-outline"
            size={50}
            action={() => changeSpeed(speed - 1)}
          />
        </View>
        <View style={styles.speedCalcs}>
          <Text>{this.calculateWordsPerMinute(totalTime, feed.length, speed)}</Text>
          <Text>{this.calculateRemainingReadTime(place, feed, speed)}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '7%'
  },
  speedChooser: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    borderStyle: 'solid',
    borderRadius: 5,
    backgroundColor: '#f2f2f2',
    marginLeft: '20%',
    marginRight: '20%'
  },
  speedDisplay: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingLeft: 25,
    paddingRight: 25
  },
  speed: {
    fontSize: 30,
    color: 'white'
  },
  speedLabel: {

  },
  speedCalcs: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  }
})
