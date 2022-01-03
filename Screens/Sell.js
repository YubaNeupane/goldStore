import React, {useState} from "react";
import { StyleSheet, Text, TextInput, View, Keyboard, TouchableWithoutFeedback } from "react-native";
import Colors from "../constants/Colors";
import Card from "../components/Card";
import HeadingTitle from "../components/HeadingTitle";
import GoldPrice from "../components/GoldPrice";
import { useSelector } from "react-redux";


export default function Sell() {
  const goldPriceT = useSelector((state) => state.goldPrice);
  const getCurrentSellPrice = goldPriceT.price - 3.6;
  const [quantity, setInputQuantity] = useState(1);

  function currencyFormat(num) {
    return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false} style= {{flex: 1}}>

    <View style={styles.screen}>
      <View>
      <Card style={styles.card}>
      <HeadingTitle>Want to Sell Your Gold?</HeadingTitle>
      <Text style={styles.text}>Calcuate the Price below</Text>
      <Card style ={styles.input}>

        <TextInput placeholder="Enter Weight in Grams" onChangeText={(inputValue) => setInputQuantity(inputValue)} keyboardType ={"numeric"}></TextInput>

      </Card>
      <View style ={styles.wrap}>
        <Text style={styles.text}>Total Price: </Text>
        <Text style={styles.sellPrice}>{currencyFormat(getCurrentSellPrice * quantity)}</Text>
        </View>
      </Card>
      </View>
    </View>
    </TouchableWithoutFeedback>

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
  },
  input: {
    width:200,
  },
  wrap: {
  flexDirection: "row",
  }
});
