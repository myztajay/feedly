import React, { Component } from 'react'
import { View, Image, Switch } from 'react-native'
import { PlayerList } from '../components/PlayerList'

class GameScreen extends Component{
  static navigationOptions = {
  title: 'current game',
  tabBarLabel: 'GAME',
  headerTintColor:'#ffffff',
  headerStyle: {
    backgroundColor: '#34495e',
  },
  tabBarIcon: <Image source={require('../assets/images/profile.png')} style={{width:26, height: 26}} />
  }

  render(){
    return(
      <View>
        <PlayerList nav={this.props.navigation}/>
      </View>
    )
  }
}



export { GameScreen }
