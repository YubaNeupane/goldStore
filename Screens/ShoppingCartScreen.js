import React from "react";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Colors from "../constants/Colors";
import Card from "../components/Card";
import { Ionicons } from "@expo/vector-icons";

import { useSelector, useDispatch } from "react-redux";
const { width, height } = Dimensions.get("window");

const ShoppingCartScreen = (props) => {
  const dispatch = useDispatch();

  const shoppingCart = useSelector((state) => state.shoppingCart);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Text>{item.name}</Text>
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
        <TouchableOpacity style={styles.buttonContainer}>
          <View>
            <Ionicons name="call" size={52} />
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
});
