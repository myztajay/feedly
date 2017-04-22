import React from 'react'
import { View, Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection'

const PlayerDetail = (props) => {
  return(
    <Card>
      <CardSection>
        <Text>{props.playerName}</Text>
      </CardSection>
    </Card>


  )
}


export default PlayerDetail
