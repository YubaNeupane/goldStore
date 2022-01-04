import React, { useEffect, useState, useRef } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import GoldListItem from "../components/GoldListItem";
import GoldPrice from "../components/GoldPrice";
import HeadingTitle from "../components/HeadingTitle";
import Colors from "../constants/Colors";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import DummyData from "../data/dummyData";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../apiCall/actions/productAction";
import { goldPrice } from "../apiCall/actions/goldPriceAction";
import HotItemCarousel from "../components/HotItemCarousel";
import { getCategories } from "../apiCall/actions/CategoriesActions";

const GoldShop = (props) => {
  const GoldItem = (item) => {};

  const [isLoading, setIsLoading] = useState(true);

  const productDetails = useSelector((state) => {
    return state.product;
  });
  const [products, setProducts] = useState([]);
  const callOnce = useRef(false);
  const dispatch = useDispatch();
  useEffect(() => {
    setProducts(productDetails);
    if (callOnce.current) {
      return;
    } else {
      dispatch(addProduct());
      dispatch(goldPrice());
      dispatch(getCategories());
      callOnce.current = true;
    }
  }, [productDetails, callOnce]);

  if (products <= 0) {
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

  return (
    <ScrollView contentContainerStyle={styles.screen} style={styles.container}>
      <GoldPrice />

      <HeadingTitle>Hot Items</HeadingTitle>
      <HotItemCarousel product={products.slice(0, 10)} nav={props.navigation} />

      <HeadingTitle>New Collection</HeadingTitle>

      {products.map((item) => {
        return (
          <GoldListItem
            navigation={props.navigation}
            key={item._id}
            item={item}
            onSelect={() =>
              props.navigation.navigate({
                routeName: "ItemDetail",
                params: {
                  selectedItem: item,
                },
              })
            }
          />
        );
      })}

      {/* <GoldListItem />
      <GoldListItem />
      <GoldListItem />
      <GoldListItem />
      <GoldListItem />
      <GoldListItem />
      <GoldListItem /> */}

      {/* <HeadingTitle>Wedding Collection</HeadingTitle> */}
    </ScrollView>
  );
};

GoldShop.navigationOptions = (navData) => {
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

export default GoldShop;
const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundViewColor,
  },
});
