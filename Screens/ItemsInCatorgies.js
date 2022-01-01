import React, { useState, useEffect, useRef } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import SearchBar from "../components/Searchbar";
import { useDispatch, useSelector } from "react-redux";
import Colors from "../constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

function currencyFormat(num) {
  return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

const ItemsInCatorgies = (props) => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [itemsToDisplay, setItemsToDisplay] = useState([]);
  const catId = props.navigation.getParam("catId");
  const goldPriceT = useSelector((state) => state.goldPrice);
  const getCurrentGoldPrice = goldPriceT.price;

  const initalItems = useRef([]);

  const products = useSelector((state) => state.product);

  useEffect(() => {
    const filiteredItems = products.filter((item) => item.category === catId);
    setItemsToDisplay(filiteredItems);

    initalItems.current = filiteredItems;
  }, [catId]);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate({
            routeName: "ItemDetail",
            params: {
              selectedItem: item,
            },
          });
        }}
      >
        <View style={styles.container}>
          <View style={styles.card}>
            <View style={styles.imageContainer}>
              <Image source={{ uri: item.thumbNail }} style={styles.image} />
            </View>
            <View style={styles.infoContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.title}>{item.name}</Text>
                <View style={styles.priceWeightContainer}>
                  <Text style={styles.subTitle}>Weight: {item.weight}g</Text>
                  <Text style={styles.subTitle}>
                    Price:{" "}
                    {currencyFormat(
                      parseInt(item.price) +
                        parseInt(item.weight) * getCurrentGoldPrice
                    )}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.screen}>
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />
      {itemsToDisplay.length > 0 ? (
        <FlatList
          data={itemsToDisplay}
          keyExtractor={(item, key) => item._id}
          numColumns={1}
          renderItem={renderItem}
        />
      ) : (
        <View style={styles.noItemsContainer}>
          <Text style={styles.noItemsText}>No Items</Text>
        </View>
      )}
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
    flex: 1,
    backgroundColor: Colors.backgroundViewColor,
    alignItems: "center",
  },
  card: {
    width: width - 10,
    height: height / 5 - 30,
    backgroundColor: "aqua",
    elevation: 5,
    shadowColor: "black",
    shadowOpacity: 0.8,
    shadowRadius: 10,
    flexDirection: "row",
    marginVertical: 10,
    backgroundColor: Colors.primaryDarkColor,
    borderRadius: 10,

    overflow: "hidden",
  },
  container: {},
  imageContainer: {
    width: "60%",
    height: "100%",
    padding: 5,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  infoContainer: {
    flex: 1,
    justifyContent: "flex-start",
  },
  textContainer: {
    marginVertical: 50,
    justifyContent: "space-around",
  },
  title: {
    fontSize: 20,
    fontFamily: "cinzel-bold",
    color: Colors.secondaryTextColor,
  },
  subTitle: {
    fontSize: 15,
    fontFamily: "cinzel-medium",
    color: Colors.secondaryTextColor,
  },
  priceWeightContainer: {
    paddingTop: 15,
    marginTop: 10,
  },
  noItemsContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  noItemsText: {
    fontFamily: "cinzel-semiBold",
    fontSize: 50,
    color: "white",
    elevation: 2,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
});

export default ItemsInCatorgies;
