import React, { Component } from 'react'
import { View, Text, Button, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

class IntroScreen extends Component{
  static navigationOptions = {
    title: 'My Current Game',
    tabBarLabel: 'Live Game',
    tabBarIcon: <Image source={require('../assets/images/home.png')} style={{width:26, height: 26}} />
  }

  render(){
    return(
      <View>
        <Text>Put your summoner name biatch!</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Game', { user: 'Lucy' })}
          title="Current Game"
        />
      </View>
    )
  }
}

const styles = {
  iconStyle: {
    height: 26,
    width: 26
  }
}

export { IntroScreen }
