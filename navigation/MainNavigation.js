import { createAppContainer } from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import TabNavigation from './TabNavigation'
import DetailScreen from '../screens/Detail'

const MainNavigation = createStackNavigator({
  Tabs: {screen: TabNavigation, navigationOptions: {header: null}},
  Detail: DetailScreen
}, {
  mode: 'modal'
})

export default createAppContainer(MainNavigation)