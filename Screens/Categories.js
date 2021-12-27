import React from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CaterogyGridItem from "../components/CaterogyGridItem";
import HeaderButton from "../components/HeaderButton";
import CategoriesName from "../data/CategoriesName";
import Colors from "../constants/Colors";

const Categories = (props) => {
  const renderGridItem = (item) => {
    return (
      <CaterogyGridItem
        item={item.item}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "ItemInCategory",
            params: {
              categoryName: item.item.title,
            },
          });
        }}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <View style={styles.cata}>
      <FlatList data={CategoriesName} renderItem={renderGridItem} />
      </View>
    </View>
  );
};

Categories.navigationOptions = (navData) => {
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

export default Categories;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.backgroundViewColor, 
  },
  cata: {
    margin:5,
    alignItems: "center",
    backgroundColor:Colors.primaryLightColor,
  }
});
