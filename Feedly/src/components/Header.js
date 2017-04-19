import React from 'react';
import { Text, View } from 'react-native';
import RiotKey from '../../keys'


const Header = (props) =>{
  const {textStyle, viewStyle} = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  )
};

const styles = {
  viewStyle:{
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 40},
    shadowOpacity: 0.2,
    elevation: 4,
    position: 'relative'
  },
  textStyle: {
    fontSize: 30
  }
}

export default Header;
