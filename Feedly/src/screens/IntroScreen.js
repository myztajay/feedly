import React, { Component } from 'react'
import { View, Text, Button, Image } from 'react-native'

class IntroScreen extends Component{
  static navigationOptions = {
    title: 'My Current Game',
    tabBarLabel: 'Live Game',
    tabBarIcon: <Image source={require('../assets/images/home.png')} style={{width:26, height: 26}} />
  }

  render(){
    return(
      <View style={styles.mainContainerStyle}>
        <Text>Put your summoner name biatch!</Text>

        <Button
          onPress={() => this.props.navigation.navigate('Game', { user: 'Lucy' })}
          style={styles.buttonStyle}
          title="Current Game"
        />
      </View>
    )
  }
}

const styles = {
  iconStyle: {
    height: 26,
    width: 26
  },
  mainContainerStyle: {
    backgroundColor: '#34495e',
    flex:1
  },
  buttonStyle: {
    color: 'green'
  }
}

export { IntroScreen }
