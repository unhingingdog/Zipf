import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

export default ({ word, pause, orientation }) => {
  return(
    <View style={styles.container}>
      <TouchableOpacity onPress={pause} style={styles.touchable}>
        <Text style={styles.word}>{ word }</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  touchable: {

  },
  word: {
    fontSize: 50
  }
})
