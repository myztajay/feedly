import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

class FindGame extends Component{
  render(){
    return(
        <View>
          <Text> Talk to me.</Text>
          <Button
            onPress={() => this.props.nav.navigate('Game', { user: 'Lucy' })}
            title="Current Game"
          />
        </View>
    )
  }
}

export { FindGame }
