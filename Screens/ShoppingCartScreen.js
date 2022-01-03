import React, { useState, useEffect } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Colors from "../constants/Colors";
import Card from "../components/Card";
import { Ionicons } from "@expo/vector-icons";
import NumericInput from "react-native-numeric-input-counter";
import { Entypo } from "@expo/vector-icons";

import { useSelector, useDispatch } from "react-redux";
const { width, height } = Dimensions.get("window");

import {
  handleQuanitiyChange,
  removeFromCart,
} from "../apiCall/actions/ShoppingCartAction";

function currencyFormat(num) {
  return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}
const ShoppingCartScreen = (props) => {
  const dispatch = useDispatch();

  const shoppingCart = useSelector((state) => state.shoppingCart);
  const goldPriceT = useSelector((state) => state.goldPrice);
  const getCurrentGoldPrice = goldPriceT.price;

  const [totalPrice, setTotalPrice] = useState(0.0);

  useEffect(() => {
    let temp = 0;

    for (let i = 0; i < shoppingCart.items.length; i++) {
      const item = shoppingCart.items[i];
      temp +=
        parseFloat(item.price) +
        parseFloat(item.weight) * getCurrentGoldPrice * item.quantity;
    }

    setTotalPrice(temp);
  }, [shoppingCart]);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.container}>
          <View>
            <Image source={{ uri: item.thumbNail }} style={styles.image} />
          </View>
          <View style={{ padding: 5, flex: 0.5 }}>
            <View>
              <Text style={styles.name} numberOfLines={1}>
                {item.name}
              </Text>
              <Text style={styles.weightAndPrice}>Weight: {item.weight}g</Text>
              <Text style={styles.weightAndPrice}>
                Price:{" "}
                {currencyFormat(
                  parseFloat(item.price) +
                    parseFloat(item.weight) * getCurrentGoldPrice
                )}
              </Text>
            </View>
          </View>
          <View>
            <NumericInput
              totalWidth={80}
              totalHeight={40}
              value={item.quantity}
              onChange={(value) =>
                dispatch(handleQuanitiyChange(item._id, value))
              }
              minValue={1}
              iconSize={25}
              editable={false}
              valueType="real"
              rounded
              textColor="white"
              iconStyle={{ color: "white" }}
              rightButtonBackgroundColor="#EA3788"
              leftButtonBackgroundColor="#E56B70"
            />
          </View>
          <View style={{ flex: 0.5, alignItems: "flex-end" }}>
            <Text style={styles.price}>
              {currencyFormat(
                parseFloat(item.price) +
                  parseFloat(item.weight) * getCurrentGoldPrice * item.quantity
              )}
            </Text>
          </View>
          <TouchableOpacity
            style={{ flex: 0.1 }}
            onPress={() => dispatch(removeFromCart(item._id))}
          >
            <View>
              <Entypo name="cross" color="red" size={20} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <View style={{ flex: 0.8, width: "100%" }}>
        <FlatList
          data={shoppingCart.items}
          contentContainerStyle={{ alignItems: "center" }}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
        />
      </View>
      <View
        style={{
          flex: 0.2,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ flex: 0.5 }}>
          <View>
            <Text
              style={{
                fontSize: 25,
                fontFamily: "cinzel-bold",
                color: "white",
              }}
            >
              Total Cost: {currencyFormat(totalPrice)}
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.buttonContainer}>
          <View>
            <Ionicons name="call" size={42} />
          </View>
          <View>
            <Text style={styles.buttonText}>CALL TO ORDER</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
ShoppingCartScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Shopping Cart",
    headerStyle: {
      backgroundColor: Colors.primaryDarkColor,
    },
    headerTitleStyle: {
      fontFamily: "cinzel-bold",
      fontSize: 25,
      color: "white",
    },
  };
};

export default ShoppingCartScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.backgroundViewColor,
  },
  itemContainer: {
    width: width - 20,
    padding: 15,
    height: 120,
    borderBottomWidth: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "60%",
    height: 60,
    borderRadius: 30,
    backgroundColor: "red",
  },
  buttonText: {
    fontSize: 23,
    fontFamily: "cinzel-black",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    fontSize: 20,
    fontFamily: "cinzel-bold",
    color: Colors.secondaryTextColor,
  },
  weightAndPrice: {
    fontSize: 13,
    color: "white",
    fontFamily: "cinzel-regular",
  },
  price: {
    fontFamily: "cinzel-bold",
    fontSize: 18,
    color: Colors.secondaryTextColor,
  },
});
