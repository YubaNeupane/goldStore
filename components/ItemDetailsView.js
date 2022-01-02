import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { useSelector } from "react-redux";
const { width, height } = Dimensions.get("window");
import Colors from "../constants/Colors";

function currencyFormat(num) {
  return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

export default function ItemDetailsView({ item }) {
  const goldPriceT = useSelector((state) => state.goldPrice);
  const getCurrentGoldPrice = goldPriceT.price;
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{item.name.toUpperCase()}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>WEIGHT: {item.weight} Grams</Text>
        <Text style={styles.infoTitle}>
          PRICE:{" "}
          {currencyFormat(
            parseInt(item.price) + parseInt(item.weight) * getCurrentGoldPrice
          )}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryDarkColor,
    width: width - 90,
    borderRadius: 25,
    bottom: 110,
  },
  titleContainer: {
    alignItems: "center",
    marginTop: 5,
  },
  title: {
    fontSize: 35,
    color: Colors.primaryLightColor,
    fontFamily: "cinzel-bold",
  },
  infoContainer: {
    padding: 15,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  infoTitle: {
    fontSize: 20,
    color: Colors.secondaryTextColor,
    fontFamily: "cinzel-medium",
  },
});
