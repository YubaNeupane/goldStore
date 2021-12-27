import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import SearchBar from "../components/Searchbar";

const ItemsInCatorgies = (props) => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  return (
    <View style={styles.screen}>
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />
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

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    marginLeft: 10,
  },
});

export default ItemsInCatorgies;
