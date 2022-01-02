import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default function ItemDetailsView({ item }) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{item.name.toUpperCase()}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>WEIGHT: {item.weight}</Text>
        <Text style={styles.infoTitle}>PRICE: {item.price}</Text>
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
    marginVertical: 10,
  },
  title: {
    fontSize: 30,
  },
  infoContainer: {
    padding: 25,
  },
});
