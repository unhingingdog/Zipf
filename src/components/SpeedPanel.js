import React,{ Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Button from './Button'
import { Ionicons } from '@expo/vector-icons'

export default class SpeedPanel extends Component {
  render() {
    const {
      speed,
      changeSpeed
    } = this.props

    return(
      <View style={styles.container}>
        <View style={styles.speedChooser}>
          <Button
            iconName="ios-arrow-down"
            size={50}
            action={() => changeSpeed(speed - 1)}
          />
          <View style={styles.speedDisplay}>
            <Text style={styles.speed} >{speed - 50}</Text>
            <Text style={styles.speedLabel} >Speed</Text>
          </View>
          <Button
            iconName="ios-arrow-up"
            size={50}
            action={() => changeSpeed(speed + 1)}
          />
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
  }
})
