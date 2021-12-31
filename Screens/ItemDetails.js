import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Button,
} from "react-native";
import Colors from "../constants/Colors";
import { useDispatch } from "react-redux";
import { addProduct } from "../apiCall/actions/ShoppingCartAction";

const ItemDetails = (props) => {
  const selectedItem = props.navigation.getParam("selectedItem");
  const dispatch = useDispatch();
  return (
    <ScrollView style={styles.imageContainer}>
      <View style={styles.itemContainer}>
        <Image
          source={{
            uri: selectedItem.thumbNail,
          }}
          style={styles.image}
        />
        <View style={styles.actions}>
          <Button
            color={Colors.primary}
            title="Add to Cart"
            onPress={() => {
              dispatch(addProduct(selectedItem));
            }}
          />
        </View>
        <Text style={styles.price}>${selectedItem.price}</Text>
        <Text style={styles.description}>{selectedItem.description}</Text>
      </View>
    </ScrollView>
  );
};

ItemDetails.navigationOptions = (navigationData) => {
  const selectedItem = navigationData.navigation.getParam("selectedItem");

  return {
    headerTitle: selectedItem.name,
    // headerRight: () => (
    //   <HeaderButtons HeaderButtonComponent={HeaderButton}>
    //     <Item
    //       title="Cart"
    //       iconName="cart"
    //       onPress={() => {
    //         navigationData.navigation.navigate({ routeName: "ShoppingCart" });
    //       }}
    //     />
    //   </HeaderButtons>
    // ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.backgroundViewColor,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: Colors.primaryLightColor,
  },
  imageContainer: {
    backgroundColor: Colors.backgroundViewColor,
  },
  infoContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    flex: 1,
  },
  price: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
    marginVertical: 20,
  },
  description: {
    fontSize: 14,
    textAlign: "center",
  },
  itemContainer: {
    margin: 10,
    flex: 1,
    alignItems: "center",
    borderRadius: 10,
    elevation: 5,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowRadius: 10,
    backgroundColor: Colors.primaryDarkColor,
  },
});

export default ItemDetails;
