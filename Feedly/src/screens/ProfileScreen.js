import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class ProfileScreen extends Component{
  static navigationOptions = {
  title: 'Profile',
  tabBarLabel: 'Live Game',
  tabBarIcon: <Image source={require('../assets/images/profile.png')} style={{width:26, height: 26}} />
  };
  render(){
    return(
      <View>
        <Text>Profile Screen </Text>
      </View>
    )
  }
}

export { ProfileScreen }
