import React, { useState, useEffect, useRef } from "react";
import {
  Dimensions,
  FlatList,
  ImageBackground,
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
            <ImageBackground
              source={{ uri: item.thumbNail }}
              style={styles.image}
              fadeDuration={300}
            >
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
            </ImageBackground>
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

      <FlatList
        data={itemsToDisplay}
        keyExtractor={(item, key) => item._id}
        numColumns={2}
        renderItem={renderItem}
      />
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
  },
  card: {
    width: width / 2 - 10,
    height: height / 3,
    backgroundColor: "aqua",
    elevation: 5,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  container: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  infoContainer: {
    flexDirection: "column-reverse",
    height: "100%",
  },
  textContainer: {
    flex: 0.12,
    backgroundColor: "rgba(255,255,255,0.75)",
    padding: 5,
  },
  title: {
    fontFamily: "cinzel-bold",
    fontSize: 20,
    color: Colors.primaryTextColor,
  },
  subTitle: {
    fontFamily: "cinzel-regular",
    fontSize: 15,
    color: "white",
  },
  priceWeightContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: Colors.primaryDarkColor,
  },
});

export default ItemsInCatorgies;
