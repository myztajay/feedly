import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Card, CardSection, Button } from './common';
import Translation from '../Translation'


const PlayerDetail = ({ player, nav }) => {
    console.log(nav.navigate)
  const {teamId, summonerName, championId } = player
  const champImage = Translation[championId]
  return(
    <TouchableOpacity
    onPress={() => nav.navigate('Player', { player:summonerName })}>
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainerStyle}>
          <Image
          style={styles.thumbnailStyle}
          source={champImage}
          />
        </View>
        <View style={styles.headerContentStyle}>
          <Text style={styles.headerTextStyle}>{summonerName}</Text>
          <Text>{teamId}</Text>
        </View>
      </CardSection>
    </Card>
    </TouchableOpacity>
  )
}

const styles = {

  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle:{
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle:{
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  }
}


export default PlayerDetail
