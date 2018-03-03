import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  ProgressViewIOS,
  StyleSheet
} from 'react-native'

export default ({ word, pause, orientation, place, length }) => {
  const styles = orientation === 'portrait' ?
    portraitStyles : landscapeStyles

  return(
    <View style={styles.container}>
      <TouchableOpacity onPress={pause} style={styles.touchable}>
        <Text style={styles.word}>{ word }</Text>
      </TouchableOpacity>
      <ProgressViewIOS
        progress={place / length}
        progressTintColor="#28b0ff"
        //progressViewStyle="bar"
        style={styles.progressBar}
      />
    </View>
  )
}

const portraitStyles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center'
  },
  touchable: {
    height: '95%',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  word: {
    fontSize: 50,
    paddingBottom: '26%'
  },
  progressBar: {
    width: '100%',
  }
})

const landscapeStyles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center'
  },
  touchable: {
    height: '90%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  word: {
    fontSize: 70,
  },
  progressBar: {
    width: '100%',
  }
})
