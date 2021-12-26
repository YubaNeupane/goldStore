import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const ItemsInCatorgies = (props) => {
  return (
    <View>
      <Text>TEST</Text>
    </View>
  );
};

ItemsInCatorgies.navigationOptions = (navigationData) => {
  const categoryName = navigationData.navigation.getParam("categoryName");

  return {
    headerTitle: categoryName,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Cart"
          iconName="cart"
          onPress={() => {
            navigationData.navigation.navigate({ routeName: "ShoppingCart" });
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({});

export default ItemsInCatorgies;
