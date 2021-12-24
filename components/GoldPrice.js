import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";
import Card from "./Card";

export default function GoldPrice(props) {
  return (
    <View>
      <Card style={styles.card}>
        <View style={styles.goldPriceContainer}>
          <Text style={styles.goldTitle}>Current Gold Price</Text>
          <View style={styles.priceContainer}>
            <View style={styles.row}>
              <Text style={styles.priceLabel}>Price: </Text>
              <View>
                <Text
                  style={{
                    ...styles.priceLabel,
                    ...{
                      color: Colors.primaryColor,
                      fontFamily: "cinzel-bold",
                    },
                  }}
                >
                  {"$"}10.99
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <Text style={styles.priceLabel}>Price: </Text>
              <View>
                <Text
                  style={{
                    ...styles.priceLabel,
                    ...{
                      color: Colors.primaryColor,
                      fontFamily: "cinzel-bold",
                    },
                  }}
                >
                  {"$"}10.99
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "90%",
    marginTop: 15,
  },
  goldTitle: {
    fontFamily: "cinzel-bold",
    fontSize: 22,
    color: Colors.primaryTextColor,
  },
  goldPriceContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    marginVertical: 2,
  },
  priceLabel: {
    fontFamily: "cinzel-regular",
    fontSize: 16,
    color: Colors.secondaryDarkColor,
  },
});
