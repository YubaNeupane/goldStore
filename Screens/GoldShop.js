import React from "react";
import { Button, StyleSheet, Text, View, FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import GoldListItem from "../components/GoldListItem";
import GoldPrice from "../components/GoldPrice";
import HeadingTitle from "../components/HeadingTitle";
import Colors from "../constants/Colors";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import DummyData from "../data/dummyData";

const GoldShop = (props) => {
  const GoldItem = (item) => {};

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <GoldPrice />
      <HeadingTitle>New Collection</HeadingTitle>

      {DummyData.map((item) => {
        return (
          <GoldListItem
            navigation={props.navigation}
            key={item.id + Math.random()}
            item={item}
            onSelect={() =>
              props.navigation.navigate({
                routeName: "ItemDetail",
                params: {
                  selectedItem: item,
                },
              })
            }
          />
        );
      })}

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
    alignItems: "center",
    backgroundColor: Colors.backgroundViewColor,
  },
});
