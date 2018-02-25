import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

export default class PasteButton extends Component {
  render() {
    return(
      <View>
        <Button
          title="Paste"
          onPress={this.props.pasteWithButton}
          style={styles.buttonStyle}
        ></Button>
      </View>
    )
  }
}

const styles = {
	buttonStyle: {
		color: 'white',
		backgroundColor: 'aqua',
	}
}
