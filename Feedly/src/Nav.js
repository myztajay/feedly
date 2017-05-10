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
  Game: { screen: GameNav, title:"Home" },
  Profile: { screen: ProfileScreen },
  etc: { screen: ProfileScreen },
}, {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: 'white',
    inactiveTintColor: 'white',
    pressOpacity: 0.5,
    showIcon: true,
    tabStyle: {
      backgroundColor: '#34495e',
    },
    style: {
      backgroundColor: '#6C7A89'

    }
  }
})

// Nav.navigationOptions = {
//   tabBarLabel: home
//     activeTintColor: '#e91e63',
//   }
// }



export { Nav }
