import React from 'react'
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection'
import Translation from '../Translation'
import Button from './Button'

const PlayerDetail = ({ player, nav }) => {
  const {teamId, summonerName, championId } = player
  const champImage = Translation[championId]
  return(
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

      <CardSection>
        <Button
        onPress={() => nav.navigate('Player', { player:summonerName })}>
          More intel on { summonerName }!
        </Button>
      </CardSection>
    </Card>
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
