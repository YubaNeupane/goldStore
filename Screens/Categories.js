import React from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CaterogyGridItem from "../components/CaterogyGridItem";
import HeaderButton from "../components/HeaderButton";
import CategoriesName from "../data/CategoriesName";
import Colors from "../constants/Colors";
import { useDispatch, useSelector } from "react-redux";

const Categories = (props) => {
  const categories = useSelector((state) => state.categories);

  if (categories <= 0) {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          backgroundColor: Colors.backgroundViewColor,
        }}
      >
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }

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
                catId: item.item._id,
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
          data={categories}
          renderItem={renderGridItem}
          keyExtractor={(item, index) => item._id}
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
