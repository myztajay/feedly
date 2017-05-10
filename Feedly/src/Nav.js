import { TabNavigator } from 'react-navigation'
import { GameScreen } from './screens/GameScreen'

const Nav = TabNavigator({
  Game: { screen: GameScreen }
});

export { Nav }
