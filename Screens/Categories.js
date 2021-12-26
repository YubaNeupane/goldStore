import React from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CaterogyGridItem from "../components/CaterogyGridItem";
import HeaderButton from "../components/HeaderButton";
import CategoriesName from "../data/CategoriesName";


const Categories = (props) => {

  const renderGridItem = (item) =>{

    return <CaterogyGridItem item={item.item}/>
  }

  return (
    <View style={styles.screen}>
      <FlatList data={CategoriesName} renderItem={renderGridItem}/>
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
    width:'100%',
    marginLeft:10
  },
});
