import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ItemDetails = () => {
  return (
    <View style={styles.screen}>
      <Text>Item Details</Text>
    </View>
  );
};

ItemDetails.navigationOptions = (navigationData) => {
  const selectedItem = navigationData.navigation.getParam("selectedItem");

  return {
    headerTitle: selectedItem.name,
    // headerRight: () => (
    //   <HeaderButtons HeaderButtonComponent={HeaderButton}>
    //     <Item
    //       title="Cart"
    //       iconName="cart"
    //       onPress={() => {
    //         navigationData.navigation.navigate({ routeName: "ShoppingCart" });
    //       }}
    //     />
    //   </HeaderButtons>
    // ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ItemDetails;
