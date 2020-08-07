import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class AppHeader extends React.Component {
render() {
return(
  <View>
  <Text style = {styles2.text}>DJ Delight</Text>
  </View>
) 
}
}

const styles2 = StyleSheet.create({
  text: {
    fontSize:30,
    fontWeight:2,
    color: 'purple',
    textAlign: 'center',
    paddingTop: 20,
    //marginBottom: 800
  }
}) 

export default AppHeader