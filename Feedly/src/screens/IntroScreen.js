import React, { Component } from 'react'
import { View, Text, Button, Image, Picker } from 'react-native'
import { Input } from '../components/common'

class IntroScreen extends Component{
  static navigationOptions = {
    title: 'Home',
    tabBarLabel: 'HOME',
    headerTintColor:'#ffffff',
    headerStyle: {
      backgroundColor: '#34495e'
    },
    tabBarIcon: <Image source={require('../assets/images/home.png')} style={{width:26, height: 26}} />

  }



  render(){
    return(
      <View style={styles.mainContainerStyle}>
        <Input
        label= {'Summoner Name'}
        underlineColorAndroid= {'#FFFFFF'}
         />
        <Button
          onPress={() => this.props.navigation.navigate('Game', { user: 'Lucy' })}
          style={styles.buttonStyle}
          color='#2ecc71'
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
  },
  mainContainerStyle: {
    backgroundColor: '#34495e',
    justifyContent: 'center',
    flex:1,
    alignItems: 'center'

  },
  buttonStyle: {
    alignSelf: 'center',
    color: 'green',
    align: 'center'
  }
}

export { IntroScreen }
