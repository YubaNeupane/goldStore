import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Colors from "../constants/Colors";
import Card from "../components/Card";
import HeadingTitle from "../components/HeadingTitle";
import GoldPrice from "../components/GoldPrice";

export default function Sell() {
  const getGoldPrice = 10.99;
  const sellGoldPrice = getGoldPrice - 2.00;
  const inputValue = 6;
  return (
    <View style={styles.screen}>
      <View>
      <Card style={styles.card}>
      <HeadingTitle>Want to Sell Your Gold?</HeadingTitle>
      <Text style={styles.text}>Calcuate the Price below</Text>
      <Card>
        <TextInput placeholder="Enter Weight in Grams" keyboardType ={"numeric"}></TextInput>
      </Card>
      <View>
        <Text style={styles.text}>Total Price: </Text>
        <Text style={styles.sellPrice}>{sellGoldPrice * inputValue}</Text>
        </View>
      </Card>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex:1,
    alignItems: "center",
    backgroundColor: Colors.backgroundViewColor,
  },
  card: {
    backgroundColor: Colors.primaryDarkColor,
  },
  text: {
    fontSize: 10,
    fontFamily: "cinzel-semiBold",
    color: Colors.secondaryTextColor,
  },
  sellPrice: {
    flexDirection: "row",
    fontSize: 10,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "cinzel-semiBold",
    color: Colors.secondaryTextColor,
  }
});
