import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ShoppingCartScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Shopping Cart</Text>
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
  },
});
