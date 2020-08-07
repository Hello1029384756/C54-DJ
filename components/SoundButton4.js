import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import {Audio} from 'expo-av';

class SoundButton4 extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.laptop}>
        <Text style={styles.buttonText}>Cartoon Lapatop</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create ({
  laptop: {
    marginLeft: 95,
    marginTop: 40,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 50,
    backgroundColor: 'yellow',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})

export default SoundButton4;