import React from 'react'
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection'
import Translation from '../Translation'

const PlayerDetail = ({ player }) => {
  const {teamId, summonerName, championId } = player
  const champImage = Translation[championId]

console.log(champImage)

  return(
    <Card>
      <CardSection>
        <View>
          <Image
          style={styles.thumbnailStyle}
          source={{ uri: `../../ChampionImages/${champImage}.png`}}
          />
        </View>
        <View>
          <Text>{summonerName}</Text>
          <Text>{teamId}</Text>
        </View>
      </CardSection>
    </Card>
  )
}

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  }
}


export default PlayerDetail
