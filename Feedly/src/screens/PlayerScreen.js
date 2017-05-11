import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

class PlayerScreen extends Component{
  static navigationOptions = ({ navigation }) => ({
  title: `${navigation.state.params.player}`,
  tabBarLabel: 'Player',
  headerTintColor:'#ffffff',
  headerStyle: {
    backgroundColor: '#34495e',

  }
});

  render(){
    const { params } = this.props.navigation.state;
    return(
      <View>
        <Text>{params.player}
        </Text>

      </View>
    )
  }
}

export { PlayerScreen }
