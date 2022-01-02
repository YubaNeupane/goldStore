import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { useSelector } from "react-redux";
const { width, height } = Dimensions.get("window");

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
        <Text style={styles.infoTitle}>WEIGHT: {item.weight}</Text>
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
    backgroundColor: "white",
    width: width - 90,
    borderRadius: 25,
    bottom: 100,
  },
  titleContainer: {
    alignItems: "center",
    marginVertical: 0,
  },
  title: {
    fontSize: 35,
  },
  infoContainer: {
    padding: 25,
  },
  infoTitle: {
    fontSize: 20,
  },
});
