import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import Colors from "../constants/Colors";
import Card from "./Card";

export default function GoldListItem(props) {
  //   console.log(props.navigation);
  return (
    <TouchableOpacity
      style={styles.goldItem}
      activeOpacity={0.8}
      onPress={() => {
        props.navigation.navigate({ routeName: "ItemDetail" });
      }}
    >
      <Card style={styles.card}>
        <View style={styles.goldItemContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: "https://s.yimg.com/ny/api/res/1.2/UWnPDAWbQGGzwwgGTaXjCA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MA--/https://s.yimg.com/os/creatr-uploaded-images/2021-05/d857e3b0-be03-11eb-beff-748cecd7a86b",
              }}
              style={styles.image}
            />
          </View>

          <View style={styles.infoContainer}>
            <View style={styles.row}>
              <Text
                numberOfLines={2}
                style={{
                  fontFamily: "cinzel-bold",
                  fontSize: 16,
                  color: Colors.secondaryTextColor,
                }}
              >
                addwad Naadwdwadwadwadwadadawdfadawdme
              </Text>
            </View>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
}

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
    padding: 15,
    flex: 1,
  },
});
