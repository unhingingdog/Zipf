import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default ({ iconName, size, action }) => {
  return(
    <TouchableOpacity onPress={action}>
      <Ionicons name={iconName} size={size} />
    </TouchableOpacity>
  )
}
