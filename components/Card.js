import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";

export default function Card(props) {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    padding: 15,
    backgroundColor: "white",
    marginVertical: 5,
    borderRadius: 30,
    shadowColor: Colors.primaryDarkColor,
    shadowRadius: 5,
    shadowOpacity: 0.6,
    elevation: 5,
    overflow: "hidden",
  },
});
