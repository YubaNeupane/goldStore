import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import GoldShop from "../Screens/GoldShop";
import ItemDetails from "../Screens/ItemDetails";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Categories from "../Screens/Categories";
import Search from "../Screens/Search";
import Sell from "../Screens/Sell";
import { View } from "react-native";
import StoreDetails from "../Screens/StoreDetails";
import { BottomTabBar } from "react-navigation-tabs";
import BlurView from "@react-native-community/blur";

import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

const defaultHeaderOptions = {
  headerTintColor: "black",
};

const GoldNavigator = createStackNavigator({
  Shop: {
    screen: GoldShop,
    navigationOptions: {
      headerTitle: "Shop",
    },
  },
  ItemDetail: {
    screen: ItemDetails,
  },
});

const CategoriesNavigation = createStackNavigator({
  Categories: { screen: Categories },
  ItemDetail: {
    screen: ItemDetails,
  },
});

const DetailsNavigation = createStackNavigator(
  {
    ItemDetail: {
      screen: StoreDetails,
      navigationOptions: { headerTitle: "Details" },
    },
  },
  defaultHeaderOptions
);

const SearchNavigation = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: { headerTitle: "Search" },
  },
});

const SellNavigation = createStackNavigator({
  Sell: { screen: Sell, navigationOptions: { headerTitle: "Sell" } },
});

const GoldBottomNavigation = createBottomTabNavigator(
  {
    Home: {
      screen: GoldNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons name="ios-pricetag" size={25} color={tabInfo.tintColor} />
          );
        },
      },
    },
    Categories: {
      screen: CategoriesNavigation,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons name="ios-apps" size={25} color={tabInfo.tintColor} />
          );
        },
      },
    },
    Search: {
      screen: SearchNavigation,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <View>
              <Ionicons name="ios-search" size={25} color={tabInfo.tintColor} />
            </View>
          );
        },
      },
    },
    Sell: {
      screen: SellNavigation,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons name="logo-usd" size={25} color={tabInfo.tintColor} />
          );
        },
      },
    },
    StoreDetail: {
      screen: DetailsNavigation,
      navigationOptions: {
        tabBarLabel: "Detail",
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              name="ios-information-circle"
              size={25}
              color={tabInfo.tintColor}
            />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.primaryDarkColor,
      labelStyle: {
        fontSize: 12,
        fontFamily: "cinzel-black",
      },
      showIcon: true,
      showLabel: true,
      style: {
        // backgroundColor: "rgba(255,255,255,0.8)",
        // position: "absolute",
        // borderTopWidth: 0,
        // shadowColor: "black",
        // shadowRadius: 1,
        // shadowOffset: { width: 0, height: 5 },
        // left: 50,
        // right: 50,
        // bottom: 20,
        // height: 100,
      },
    },
  }
);

export default createAppContainer(GoldBottomNavigation);
