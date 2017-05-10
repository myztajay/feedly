import React, { Component } from 'react'
import { View } from 'react-native'
import { PlayerList } from '../components/PlayerList'

class GameScreen extends Component{

  render(){
    return(
      <View>
      
        <PlayerList nav={this.props.navigation}/>
      </View>
    )
  }
}



export { GameScreen }
