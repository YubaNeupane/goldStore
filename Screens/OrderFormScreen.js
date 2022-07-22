import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import Colors from "../constants/Colors";

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import emailjs from "@emailjs/browser";
import { clearCart } from "../apiCall/actions/ShoppingCartAction";

const OrderFormScreen = (props) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const shoppingCart = useSelector((state) => state.shoppingCart);
  const goldPriceT = useSelector((state) => state.goldPrice);
  const getCurrentGoldPrice = goldPriceT.price;
  const [isDisabled, setIsDisabled] = useState(false);
  const dispatch = useDispatch();

  function currencyFormat(num) {
    return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  const handleSendOrder = () => {
    if (name == "") {
      alertBox("Please input your name!");
      return;
    }
    if (phoneNumber == "") {
      alertBox("Please input your phone number!");
      return;
    }

    if (phoneNumber.match(/\d/g).length != 10) {
      alertBox("Please enter a valid phone number!");
      return;
    }

    let productHTML = "<ul>";
    for (let i = 0; i < shoppingCart.count; i++) {
      productHTML +=
        "<li>" +
        shoppingCart.items[i].name +
        "<ul><li>Quantity: " +
        shoppingCart.items[i].quantity +
        "</li>" +
        "<li>Price: " +
        currencyFormat(
          parseFloat(shoppingCart.items[i].price) +
            parseFloat(shoppingCart.items[i].weight) *
              getCurrentGoldPrice *
              shoppingCart.items[i].quantity
        ) +
        "</li>" +
        "</ul></li>";
    }
    productHTML += "</ul>";
    const data = {
      from_name: name.toUpperCase(),
      phoneNumber: phoneNumber,
      products: productHTML,
    };

    setIsDisabled(true);
    emailjs
      .send("service_h2meetk", "template_m68kzyi", data, "1l_6f370pe-2oUDeR")
      .then(
        (result) => {
          orderSendAlertBox();
          dispatch(clearCart());
          setIsDisabled(false);
          props.navigation.pop();
        },
        (error) => {
          alertBox(error.text);
          setIsDisabled(false);
        }
      );
  };

  const alertBox = (message) => Alert.alert("Invalid Input", message, []);
  const orderSendAlertBox = () =>
    Alert.alert(
      "Order Send",
      "Order has been send! We will contact you soon. Thank You!",
      []
    );

  return (
    <ScrollView style={{ flex: 1, backgroundColor: Colors.primaryLightColor }}>
      <View
        style={{
          justifyContent: "flex-start",
          alignItems: "flex-start",
          padding: 15,
          marginTop: 60,
          width: "100%",
        }}
      >
        <TextInput
          placeholder="Enter Name"
          keyboardAppearance="dark"
          returnKeyType="next"
          style={{
            flex: 1,
            backgroundColor: Colors.secondaryTextColor,
            width: "100%",
            height: 45,
            padding: 15,
            marginVertical: 10,
            borderRadius: 25,
            color: "black",
            shadowRadius: 15,
            shadowColor: "black",
            shadowOffset: { width: 15, height: 10 },
          }}
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          placeholder="Enter Phone Number"
          keyboardType="phone-pad"
          keyboardAppearance="dark"
          returnKeyType="done"
          style={{
            flex: 1,
            backgroundColor: Colors.secondaryTextColor,
            width: "100%",
            height: 45,
            padding: 15,
            marginVertical: 10,
            borderRadius: 25,
            color: "black",
            shadowRadius: 15,
            shadowColor: "black",
            shadowOffset: { width: 15, height: 10 },
          }}
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
        />
        <TouchableOpacity
          style={{
            flex: 1,
            marginVertical: 120,
            width: "100%",
            alignContent: "center",
            justifyContent: "center",
          }}
          disabled={isDisabled}
          onPress={() => handleSendOrder()}
        >
          <View
            style={{
              width: "100%",
              height: 60,
              alignContent: "center",
              justifyContent: "center",
              backgroundColor: Colors.primaryColor,
              textAlignVertical: "center",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: Colors.primaryLightColor,
                fontSize: 36,
                fontFamily: "cinzel-bold",
              }}
            >
              Send Order
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

OrderFormScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Order Form",
    headerStyle: {
      backgroundColor: Colors.primaryDarkColor,
    },
    headerTitleStyle: {
      fontFamily: "cinzel-bold",
      fontSize: 25,
      color: "white",
    },
  };
};

export default OrderFormScreen;
