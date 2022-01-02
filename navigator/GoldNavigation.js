import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import GoldShop from "../Screens/GoldShop";
import ItemDetails from "../Screens/ItemDetails";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Categories from "../Screens/Categories";
import Search from "../Screens/Search";
import Sell from "../Screens/Sell";
import { View, Image, StyleSheet } from "react-native";
import StoreDetails from "../Screens/StoreDetails";
import { BottomTabBar } from "react-navigation-tabs";
import BlurView from "@react-native-community/blur";

import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import ShoppingCartScreen from "../Screens/ShoppingCartScreen";
import ItemsInCatorgies from "../Screens/ItemsInCatorgies";

const defaultHeaderOptions = {
  headerTintColor: "black",
};

const GoldNavigator = createStackNavigator(
  {
    Shop: {
      screen: GoldShop,
      navigationOptions: {
        headerTitle: "",
        headerBackground: () => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
              backgroundColor: Colors.primaryDarkColor,
            }}
          >
            <Image
              source={require("../assets/logo/logo.png")}
              resizeMode="contain"
              style={{ width: 80, top: 12 }}
            />
          </View>
        ),
        headerStyle: {
          backgroundColor: Colors.primaryDarkColor,
        },
      },
    },
    ItemDetail: {
      screen: ItemDetails,
    },
    ShoppingCart: {
      screen: ShoppingCartScreen,
    },
  },
  {
    // headerLayoutPreset: "center",
  }
);

const CategoriesNavigation = createStackNavigator({
  Categories: {
    screen: Categories,
    navigationOptions: {
      headerTitle: "",
      headerBackground: () => (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            backgroundColor: Colors.primaryDarkColor,
          }}
        >
          <Image
            source={require("../assets/logo/logo.png")}
            resizeMode="contain"
            style={{ width: 80, top: 12 }}
          />
        </View>
      ),
      headerStyle: {
        backgroundColor: Colors.primaryDarkColor,
      },
    },
  },
  ItemDetail: {
    screen: ItemDetails,
  },
  ShoppingCart: {
    screen: ShoppingCartScreen,
  },
  ItemInCategory: ItemsInCatorgies,
});

const DetailsNavigation = createStackNavigator(
  {
    ItemDetail: {
      screen: StoreDetails,
      navigationOptions: {
        headerTitle: "",
        headerBackground: () => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
              backgroundColor: Colors.primaryDarkColor,
            }}
          >
            <Image
              source={require("../assets/logo/logo.png")}
              resizeMode="contain"
              style={{ width: 80, top: 12 }}
            />
          </View>
        ),
        headerStyle: {
          backgroundColor: Colors.secondaryTextColor,
        },
      },
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
  Sell: {
    screen: Sell,
    navigationOptions: {
      headerTitle: "",
      headerBackground: () => (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            backgroundColor: Colors.primaryDarkColor,
          }}
        >
          <Image
            source={require("../assets/logo/logo.png")}
            resizeMode="contain"
            style={{ width: 80, top: 12 }}
          />
        </View>
      ),
      headerStyle: {
        backgroundColor: Colors.secondaryTextColor,
      },
    },
  },
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
    // Search: {
    //   screen: SearchNavigation,
    //   navigationOptions: {
    //     tabBarIcon: (tabInfo) => {
    //       return (
    //         <View>
    //           <Ionicons name="ios-search" size={25} color={tabInfo.tintColor} />
    //         </View>
    //       );
    //     },
    //   },
    // },
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
      activeTintColor: Colors.secondaryTextColor,
      labelStyle: {
        fontSize: 12,
        fontFamily: "cinzel-black",
      },
      showIcon: true,
      showLabel: true,
      style: {
        backgroundColor: Colors.primaryDarkColor,
        borderWidth: 0,
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
