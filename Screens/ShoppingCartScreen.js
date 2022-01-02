import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";
import Card from "../components/Card";

import { useSelector, useDispatch } from "react-redux";

const ShoppingCartScreen = (props) => {
  const dispatch = useDispatch();

  const shoppingCart = useSelector((state) => state.shoppingCart);

  return (
    <View style={styles.screen}>
      <Card style={styles.itemContainer}></Card>
    </View>
  );
};
ShoppingCartScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Shopping Cart",
  };
};

export default ShoppingCartScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.backgroundViewColor,
  },
  itemContainer: {
    width: "95%",
    height: 150,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    overflow: "hidden",
    backgroundColor: Colors.cardViewColor,
    alignSelf: "center",
  },
});
