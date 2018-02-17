import React from 'react'
import { Text, View, Button } from 'react-native'

export default ({ word, pause }) => {
  return(
    <View>
      <Text>{ word }</Text>
      <Button title="pause" onPress={pause}></Button>
    </View>
  )
}
