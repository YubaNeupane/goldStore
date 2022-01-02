import React, { useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Button,
} from "react-native";
import Colors from "../constants/Colors";
import { useDispatch } from "react-redux";
import { addProduct } from "../apiCall/actions/ShoppingCartAction";
import ItemDetailsCarousel from "../components/ItemDetailsCarousel";
import ItemDetailsView from "../components/ItemDetailsView";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import CustomAddToCartButton from "../components/CustomAddToCartButton";
import { addToCart } from "../apiCall/actions/ShoppingCartAction";

const ItemDetails = (props) => {
  const selectedItem = props.navigation.getParam("selectedItem");
  const dispatch = useDispatch();

  const handleOnAddToCart = () => {
    dispatch(addToCart(selectedItem));

    props.navigation.navigate({ routeName: "ShoppingCart" });
  };

  return (
    <ScrollView style={styles.imageContainer}>
      <View style={styles.itemContainer}>
        <ItemDetailsCarousel item={selectedItem} />
        <View>
          <ItemDetailsView item={selectedItem} />
        </View>
        <CustomAddToCartButton handleClick={handleOnAddToCart} />
      </View>
    </ScrollView>
  );
};

ItemDetails.navigationOptions = (navigationData) => {
  const selectedItem = navigationData.navigation.getParam("selectedItem");

  return {
    headerTitle: selectedItem.name,
    headerStyle: {
      backgroundColor: Colors.primaryDarkColor,
    },
    headerTitleStyle: {
      fontFamily: "cinzel-bold",
      fontSize: 25,
      color: "white",
    },

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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.backgroundViewColor,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: Colors.primaryLightColor,
  },
  imageContainer: {
    backgroundColor: Colors.backgroundViewColor,
  },
  infoContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    flex: 1,
  },
  price: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
    marginVertical: 20,
  },
  description: {
    fontSize: 14,
    textAlign: "center",
  },
  itemContainer: {
    margin: 100,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    elevation: 5,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
});

export default ItemDetails;
