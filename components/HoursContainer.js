import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";

export default function HoursContainer(props) {
  return (
    <View style={styles.element}>
      <View
        style={
          props.hours === "Closed"
            ? {
                ...styles.hoursContainer,
                ...{ backgroundColor: "black", borderRadius: 8 },
              }
            : styles.hoursContainer
        }
      >
        <View>
          <Text style={styles.text}>{props.name}</Text>
        </View>
        <View>
          <Text style={styles.text}>{props.hours}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  hoursContainer: {
    flexDirection: "row",
    width: "95%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,

    // flex: 1,
  },

  text: {
    fontFamily: "cinzel-regular",
    fontSize: 15,
    color: Colors.secondaryTextColor,
  },
  element: {
    marginVertical: 3,
    alignItems: "center",
  },
});
