import React, { Component } from 'react';
import { View } from 'react-native';
import RiotKey from '../../keys';
import PlayerDetail from './PlayerDetail'

class PlayerList extends Component {

  state = {
    players: []
  };

  componentWillMount(){
    fetch(`https://na.api.riotgames.com/api/lol/NA/v1.4/summoner/by-name/uvux7?api_key=${RiotKey}`, {
      method: 'get'
    })
    .catch((err)=> console.warn(err))
    .then((response)=> response.json())
    .then((data)=> {
      const { id, name, profileIconId, summonerLevel } = data.uvux7

      const players = [...this.state.players,  id, name, profileIconId, summonerLevel]
      this.setState({ players })
      

    })
  }

  renderPlayers(){
    console.log(this.state.players)
    return this.state.players.map((name)=>
    <PlayerDetail key={name} playerName={name}/> );
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
