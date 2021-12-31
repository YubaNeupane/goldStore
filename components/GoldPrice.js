import React, {useEffect, useState} from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { goldPrice } from "../apiCall/actions/goldPriceAction";


export default function GoldPrice(props) {
  const goldPriceT =  useSelector(state => state.goldPrice);
  const[currentGoldPrice,setCurrentGoldPrice] = useState(0.00);
  const dispatch = useDispatch();
  const getPrice = () => {
    dispatch(goldPrice());
  }
  useEffect(() => {
    setCurrentGoldPrice(goldPriceT.price);
  }, [goldPriceT])
  useEffect(() => {
   getPrice();
  }, [])
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
                  {"$"}{currentGoldPrice}
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <Text style={styles.priceLabel}>Price Per Tola(11.6 g): </Text>
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
                  {"$"}{(currentGoldPrice * 11.6).toFixed(2)}
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
