import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";
export default function HeadingTitle(props) {
  return (
    <View style={styles.headingContainer}>
      <Text style={styles.title}>{props.children.toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headingContainer: {
    alignItems: "flex-start",
    width: "100%",
    paddingLeft: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: "cinzel-semiBold",
    color: Colors.primaryTextColor,
  },
});
