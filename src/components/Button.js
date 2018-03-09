import React from 'react'
import { TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { Ionicons } from '@expo/vector-icons'

const Button = ({ iconName, size, action, color }) => {
  return(
    <TouchableOpacity onPress={action}>
      <Ionicons name={iconName} size={size} color={color} />
    </TouchableOpacity>
  )
}

export default Button

Button.propTypes = {
  iconName: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  action: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired
}
