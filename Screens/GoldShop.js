import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Card from "../components/Card";
import GoldListItem from "../components/GoldListItem";
import GoldPrice from "../components/GoldPrice";
import HeadingTitle from "../components/HeadingTitle";
import Colors from "../constants/Colors";

export default function GoldShop() {
  return (
    <View style={styles.screen}>
      <GoldPrice />
      <HeadingTitle>New Collection</HeadingTitle>

      <GoldListItem />
      <GoldListItem />

      <HeadingTitle>Wedding Collection</HeadingTitle>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
});
