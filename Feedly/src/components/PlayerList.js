import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import RiotKey from '../../keys';
import PlayerDetail from './PlayerDetail'

class PlayerList extends Component {
  state = {
    players: []
  };
  static navigationOptions = {
  title: 'My Current Game',
  tabBarLabel: 'Live Game',
  };
  componentWillMount(){
    // FAKE API CALL FOR DUMMY DATA - SERVED FROM db.json WITH JSON-SERVER
    fetch('http://192.168.1.151:3000/files', {
      method: 'get'
    })
    .catch((err)=> console.warn(err))
    .then((response)=> response.json())
    .then((riotData)=> {
      const {participants, bannedChampions } = riotData
      const players = participants
      this.setState({ players })
    })
    //REAL API CALL - NEED TO CHANGE USER ID to active one for it to work
    // fetch(`https://na1.api.riotgames.com/observer-mode/rest/consumer/getSpectatorGameInfo/NA1/20140394?api_key=${RiotKey}`, {
    // .catch((err)=> console.warn(err))
    // .then((response)=> response.json())
    // .then((riotData)=> {
    //   const {participants, bannedChampions } = riotData
    //   const players = participants
    //   this.setState({ players })
    // })
  }

  renderPlayers(){
    return this.state.players.map((player)=>
    <PlayerDetail key={player.summonerId} player={player} nav={this.props.nav}/> );
  }

  render(){
    return(
      <ScrollView style={styles.mainContainer}>
        {this.renderPlayers()}
      </ScrollView>
    )
  }
}

const styles = {
  mainContainer: {
    backgroundColor: '#2980b9'
  }
}

export { PlayerList };
