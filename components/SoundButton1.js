import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import {Audio} from 'expo-av';

class SoundButton1 extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Buzzer Sound</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    marginLeft: 95,
    marginTop: 100,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 50,
    backgroundColor: 'red',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
  }
});

export default SoundButton1;