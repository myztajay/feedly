import React, { Component } from 'react';
import { View } from 'react-native';
import RiotKey from '../../keys';
import PlayerDetail from './PlayerDetail'

class PlayerList extends Component {

  state = {
    players: []
  };

  componentWillMount(){
    fetch(`https://na1.api.riotgames.com/observer-mode/rest/consumer/getSpectatorGameInfo/NA1/19134540?api_key=${RiotKey}`, {
      method: 'get'
    })
    .catch((err)=> console.warn(err))
    .then((response)=> response.json())
    .then((riotData)=> {
      const {participants, bannedChampions } = riotData
      const players = participants
      this.setState({ players })
    })
  }

  renderPlayers(){
    console.log(this.state.players)
    return this.state.players.map((player)=>
    <PlayerDetail key={player.summonerId} player={player}/> );
  }

  render(){

    return(
      <View>
        {this.renderPlayers()}
      </View>
    )
  }
}

export default PlayerList;
