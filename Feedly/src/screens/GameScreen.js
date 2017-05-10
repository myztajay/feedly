import React, { Component } from 'react'
import { View } from 'react-native'
import { PlayerList } from '../components/PlayerList'

class GameScreen extends Component{
  static navigationOptions = {
  title: 'Welcome',
  };
  render(){
    return(
      <View>
        <PlayerList />
      </View>
    )
  }
}

export { GameScreen }
