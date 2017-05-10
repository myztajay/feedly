import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

class IntroScreen extends Component{
  static navigationOptions = {
  title: 'My Current Game',
  tabBarLabel: 'Live Game',
  };
  render(){
    return(
      <View>
        <Text>Put your summoner name biatch!</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Game', { user: 'Lucy' })}
          title="Current Game"
        />
      </View>
    )
  }
}

export { IntroScreen }
