import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import GoldListItem from "../components/GoldListItem";
import GoldPrice from "../components/GoldPrice";
import HeadingTitle from "../components/HeadingTitle";
import Colors from "../constants/Colors";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const GoldShop = (props) => {
  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <GoldPrice />
      <HeadingTitle>New Collection</HeadingTitle>

      <GoldListItem navigation={props.navigation} />

      {/* <GoldListItem />
        <GoldListItem />
        <GoldListItem />
        <GoldListItem />
        <GoldListItem />
        <GoldListItem />
        <GoldListItem />
        <GoldListItem /> */}

      <HeadingTitle>Wedding Collection</HeadingTitle>
    </ScrollView>
  );
};

GoldShop.navigationOptions = (navData) => {
  return {
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Cart"
          iconName="cart"
          onPress={() => {
            navData.navigation.navigate({ routeName: "ShoppingCart" });
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default GoldShop;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.backgroundViewColor,
  },
});
