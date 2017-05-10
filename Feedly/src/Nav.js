import { TabNavigator, StackNavigator } from 'react-navigation'
import { GameScreen } from './screens/GameScreen'
import { ProfileScreen } from './screens/ProfileScreen'
import { PlayerScreen } from './screens/PlayerScreen'
import { IntroScreen } from './screens/IntroScreen'

const GameNav = StackNavigator({
  Intro: { screen: IntroScreen },
  Game: { screen: GameScreen },
  Player: { screen: PlayerScreen }
});


const Nav = TabNavigator({
  Game: { screen: GameNav },
  Profile: { screen: ProfileScreen },
  etc: { screen: PlayerScreen }
});





export { Nav }
