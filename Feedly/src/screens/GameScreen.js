import React, { Component } from 'react'
import { View } from 'react-native'
import { PlayerList } from '../components/PlayerList'

class GameScreen extends Component{
  static navigationOptions = {
  title: 'Live',
  };
  render(){
    return(
      <View>
        <PlayerList nav={this.props.navigation}/>
      </View>
    )
  }
}



export { GameScreen }
