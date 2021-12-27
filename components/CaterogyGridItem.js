import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import Card from "../components/Card";
import Colors from "../constants/Colors";

export default function CaterogyGridItem(props) {
  return (
    <TouchableOpacity onPress={props.onSelect}>
      <View style={styles.container}>
        <Card style={styles.itemContainer}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: props.item.image }} style={styles.image} />
          </View>
          <Text numberOfLines={1} style={styles.title}>
            {props.item.title}
          </Text>
        </Card>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 140,
    height: "100%",
    resizeMode: "contain",
  },
  itemContainer: {
    width: "95%",
    height: 150,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    overflow: "hidden",
    backgroundColor: Colors.primaryDarkColor,
    alignSelf: "center",
  },
  title: {
    flex: 1,
    fontSize: 20,
    marginHorizontal: 10,
    fontFamily: "cinzel-bold",
    padding: 20,
    color: Colors.secondaryTextColor,
  },
  imageContainer: {
    backgroundColor: Colors.secondaryLightColor,
    // flex:1,
    alignItems: "center",
    height: "100%",
    padding: 0,
    margin: 0,
    borderBottomLeftRadius: 50,
    borderTopEndRadius: 50,
    overflow: "hidden",
  },
});
