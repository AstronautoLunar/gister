//Types
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";

// Styles
import colors from "../styles/colors";

const tabBarConfig: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarStyle: {
    backgroundColor: colors.dominat,
    borderTopColor: colors.emphasis,
    borderLeftColor: colors.emphasis,
    borderRightColor: colors.emphasis,
    borderBottomColor: colors.emphasis,
    borderWidth: 1,
    position: "absolute",
    left: 48,
    right: 48,
    bottom: 20,
    borderRadius: 100,
    
  },
  tabBarHideOnKeyboard: true,
};

export default tabBarConfig;