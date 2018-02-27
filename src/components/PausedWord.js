import React, { Component} from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class PausedWord extends Component {
  constructor(props) {
    super(props)

    this.renderWord          = this.renderWord.bind(this)
    this.renderWordLandscape = this.renderWordLandscape.bind(this)
  }


  renderWord() {
   const { word, sliderWordPreview, placeSliderActive } = this.props

   if (placeSliderActive) {
     return(
      <View style={styles.sliderWordPreview}>
        <Text style={styles.previousWord}>{sliderWordPreview[0]}</Text>
        <Text style={styles.currentWord}>{sliderWordPreview[1]}</Text>
        <Text style={styles.nextWord}>{sliderWordPreview[2]}</Text>
      </View>
     )
   } else {
     return(
       <Text style={{
         fontSize: word.length > 15 ? 39 : 50
       }}>
        {word}
       </Text>
    )
   }
  }

  renderWordLandscape() {
    const { word, sliderWordPreview, placeSliderActive } = this.props

    if (placeSliderActive) {
      return(
       <View style={styles.sliderWordPreview}>
         <Text>{sliderWordPreview[0]}</Text>
         <Text>{sliderWordPreview[1]}</Text>
         <Text>{sliderWordPreview[2]}</Text>
       </View>
      )
    } else {
      return <Text style={{ fontSize: 80 }}>{word}</Text>
    }
  }

  render() {
    return(this.props.orientation === 'portrait' ?
      this.renderWord() : this.renderWordLandscape())
  }
}

const styles = StyleSheet.create({
  sliderWordPreview: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  previousWord: {
    fontSize: 30,
    color: 'grey',

  },
  currentWord: {
    fontSize: 50
  },
  nextWord: {
    fontSize: 30,
    color: 'grey'
  }
})
