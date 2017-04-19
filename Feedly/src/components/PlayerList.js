import React, { Component } from 'react';
import { View, Text } from 'react-native';

class PlayerList extends Component {
  componentWillMount(){
    console.warn("yo")
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
