import React, { Component } from 'react';
import { View, Text } from 'react-native';
import RiotKey from '../../keys'
class PlayerList extends Component {
  componentWillMount(){
    fetch(`https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/uvux7?api_key=${RiotKey}`, {
      method: 'get'
    })
    .catch(()=> console.warn('didnt get data'))
    .then(()=> console.warn('got data'))
  }
  render(){
    return(
      <View>
        <Text>PlayerList</Text>
      </View>
    )
  }
}

export default PlayerList;
