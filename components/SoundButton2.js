import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import {Audio} from 'expo-av';

class SoundButton2 extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.bell}>
        <Text style={styles.buttonText}>Bell Sound</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create ({
  bell: {
    marginLeft: 95,
    marginTop: 40,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 50,
    backgroundColor: 'blue',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})

export default SoundButton2;