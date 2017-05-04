import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import RiotKey from '../../keys';
import PlayerDetail from './PlayerDetail'

class PlayerList extends Component {

  state = {
    players: []
  };

  componentWillMount(){
    fetch(`https://na1.api.riotgames.com/observer-mode/rest/consumer/getSpectatorGameInfo/NA1/20132258?api_key=${RiotKey}`, {
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
      <ScrollView>
        {this.renderPlayers()}
      </ScrollView>
    )
  }
}

export default PlayerList;
