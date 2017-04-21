import React, { Component } from 'react';
import { View, Text } from 'react-native';
import RiotKey from '../../keys';

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
      const players = [...this.state.players, data.uvux7.name]
      this.setState({ players })
    })
  }

  render(){
    console.log(this.state)
    return(
      <View>
        <Text>PlayerList</Text>
      </View>
    )
  }
}

export default PlayerList;
