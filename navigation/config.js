import { createStackNavigator } from "react-navigation-stack";
import { BG_COLOR, TINIT_COLOR, ACTIVE_COLOR } from "../constants/Colors";

export const headerStyles = {
  headerStyle: {
    backgroundColor: BG_COLOR,
    borderBottomWidth: 0
  },
  headerTitleStyle: {
    color: TINIT_COLOR
  },
  headerTintColor: TINIT_COLOR
};

export const createStack = (screen, title) =>
  createStackNavigator({
    Screen: {
      screen,
      navigationOptions: {
        title,
        ...headerStyles
      }
    }
  });
