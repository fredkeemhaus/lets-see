import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TVScreen from '../screens/TV'
import MoviesScreen from '../screens/Movies'
import SearchScreen from '../screens/Search'

import { BG_COLOR } from '../constants/Colors'

const TabNavigation = createBottomTabNavigator({
    Movies: MoviesScreen,
    TV: TVScreen,
    Search: SearchScreen
  }, {
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: BG_COLOR
      }
    }
  })

  export default createAppContainer(TabNavigation)