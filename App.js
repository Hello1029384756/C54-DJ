import * as React from 'react';
import { View } from 'react-native';
import SoundButton1 from './components/SoundButton1';
import SoundButton2 from './components/SoundButton2';
import SoundButton3 from './components/SoundButton3';
import SoundButton4 from './components/SoundButton4';
import SoundButton5 from './components/SoundButton5';
import AppHeader from './components/AppHeader';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppHeader />
        <SoundButton1 />
        <SoundButton2 />
        <SoundButton3 />
        <SoundButton4 />
        <SoundButton5 />
      </View>
    );
  }
}
