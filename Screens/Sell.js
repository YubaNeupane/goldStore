import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
  ScrollView,
  Dimensions,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import Colors from "../constants/Colors";
import Card from "../components/Card";
import HeadingTitle from "../components/HeadingTitle";
import { useSelector } from "react-redux";

const { width, height } = Dimensions.get("window");

export default function Sell() {
  const goldPriceT = useSelector((state) => state.goldPrice);
  const getCurrentSellPrice = goldPriceT.price - 3.6;
  const [quantity, setInputQuantity] = useState("1");

  function currencyFormat(num) {
    return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  useEffect(() => {
    if (quantity == "") {
      setInputQuantity(1);
    }
  }, [quantity]);

  if (getCurrentSellPrice <= 0) {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          backgroundColor: Colors.backgroundViewColor,
        }}
      >
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.screen}
      contentContainerStyle={styles.contents}
    >
      <View
        style={{
          width: "100%",
          alignItems: "center",
          marginTop: 0,
        }}
      >
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}
          accessible={false}
          style={{ flex: 1 }}
        >
          <View>
            <View style={{ width: width - 50 }}>
              <Card style={styles.card}>
                <View
                  style={{
                    height: "60%",
                    width: "100%",
                    justifyContent: "center",
                  }}
                >
                  <View
                    style={{
                      width: "100%",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <HeadingTitle>Want to Sell Your Gold?</HeadingTitle>
                  </View>

                  <View style={{ flex: 0.5 }}>
                    <Image
                      style={styles.image}
                      source={require("../assets/storeImage/goldImage.jpeg")}
                    />
                  </View>
                  <View></View>
                </View>

                <View
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 5,
                  }}
                >
                  <Text style={styles.text}>Price Per Gram</Text>
                  <View
                    style={{
                      width: "100%",
                      backgroundColor: "red",
                      height: 50,
                      backgroundColor: "white",
                      borderRadius: 15,
                    }}
                  >
                    <TextInput
                      placeholder="Enter Weight in Grams"
                      onChangeText={(inputValue) =>
                        setInputQuantity(inputValue)
                      }
                      style={{ width: "100%", height: "100%", padding: 10 ,color:Colors.primaryDarkColor,fontSize:20}}
                      keyboardType={"numeric"}
                      returnKeyType={"done"}
                    />
                  </View>
                </View>

                <View style={styles.wrap}>
                  <Text style={styles.text}>Total Price: </Text>
                  <Text style={styles.sellPrice}>
                    {currencyFormat(getCurrentSellPrice * parseInt(quantity))}
                  </Text>
                </View>
              </Card>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.backgroundViewColor,
  },
  contents: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  card: {
    backgroundColor: Colors.primaryDarkColor,
  },
  text: {
    fontSize: 30,
    fontFamily: "cinzel-semiBold",
    color: Colors.secondaryTextColor,
  },
  sellPrice: {
    flexDirection: "row",
    fontSize: 30,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "cinzel-semiBold",
    color: Colors.secondaryTextColor,
  },
  input: {
    width: 200,
  },
  image: {
    width: "100%",
    height: "100%",

    borderRadius: 10,
  },
  wrap: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    padding: 20,
  },
});
