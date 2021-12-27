import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import Colors from "../constants/Colors";
import Card from "./Card";
const GoldListItem = (props) => {
  //   console.log(props.navigation);
  return (
    <TouchableOpacity
      style={styles.goldItem}
      activeOpacity={0.8}
      onPress={props.onSelect}
    >
      <Card style={styles.card}>
        <View style={styles.goldItemContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: props.item.thumbNail,
              }}
              style={styles.image}
            />
          </View>

          <View style={styles.infoContainer}>
            <View style={styles.row}>
              <Text
                numberOfLines={1}
                style={{
                  fontFamily: "cinzel-semiBold",
                  fontSize: 16,
                  color: Colors.secondaryTextColor,
                }}
              >
                {props.item.name}
              </Text>
              <Text
                numberOfLines={1}
                style={{
                  fontFamily: "cinzel-regular",
                  fontSize: 13,
                  color: "black",
                }}
              >
                Weight: {props.item.weight} Grams
              </Text>
            </View>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  goldItem: {
    width: "90%",
  },
  card: {
    backgroundColor: Colors.primaryDarkColor,
  },
  goldItemContainer: {
    flexDirection: "row",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: Colors.primaryLightColor,
  },
  imageContainer: {},
  infoContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    flex: 1,
  },
});

export default GoldListItem;
