// Core
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Types
import RootOptionsParamsBottom from "../types";

// Screens
import DealsScreen from "../screens/Deals";
import GamesScreen from "../screens/Games";

// Styles
import tabBarConfig from "../configs/tabBarConfig";
import colors from "../styles/colors";

// Icons
import { 
  MaterialIcons, 
  Ionicons 
} from "@expo/vector-icons";

const BottomTab = createBottomTabNavigator<RootOptionsParamsBottom>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator screenOptions={tabBarConfig}>
        <BottomTab.Screen 
          name="deals" 
          component={DealsScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <MaterialIcons 
                name="local-offer" 
                size={24} 
                color={focused ? colors.emphasis : colors.secondary} 
              />
            )
          }}
        />
        <BottomTab.Screen 
          name="games" 
          component={GamesScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons 
                name="game-controller" 
                size={24} 
                color={focused ? colors.emphasis : colors.secondary} 
              />
            )
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  )
}