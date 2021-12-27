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
      <View style={styles.itemContainer}>
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
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <View>
        <FlatList
          style={styles.list}
          data={CategoriesName}
          renderItem={renderGridItem}
          // contentContainerStyle={styles.itemContainer}
        />
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
  itemContainer: {
    justifyContent: "center",
  },
  screen: {
    backgroundColor: Colors.backgroundViewColor,
  },
  item: {
    alignItems: "center",
  },
});
