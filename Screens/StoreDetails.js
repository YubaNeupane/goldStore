import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Linking,
  TouchableOpacity,
  Image,
} from "react-native";
import Card from "../components/Card";
import HeadingTitle from "../components/HeadingTitle";
import HoursContainer from "../components/HoursContainer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

export default function StoreDetails() {
  const openDirection = () => {
    const fullAddress = "45 Gateway Dr, Mechaanicsburg, PA-17050";
    const url = Platform.select({
      ios: `maps:0,0?q=${fullAddress}`,
      android: `geo:0,0?q=${fullAddress}`,
    });

    Linking.openURL(url);
  };
  return (
    <ScrollView contentContainerStyle={styles.screen} style={styles.container}>
      <Card style={styles.card}>
        <HeadingTitle>Contact Information</HeadingTitle>
        <View style={{ height: 200 }}>
          <Image
            style={styles.image}
            source={require("../assets/storeImage/store.png")}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            margin: 20,
          }}
        >
          <View style={{ flexDirection: "column" }}>
            <View style={styles.call}>
              <Ionicons name="call" size={32} />
              <Text style={styles.textColor}>412-377-8036</Text>
            </View>

            <TouchableOpacity
              onPress={() => {
                Linking.openURL(
                  "https://www.facebook.com/New-Suva-Laxmi-Jewelers-113242651030219"
                );
              }}
              style={styles.customButton}
            >
              <View style={styles.mapDirection}>
                <MaterialCommunityIcons
                  name="facebook"
                  size={32}
                  color={"white"}
                />
                <Text style={styles.textColor}>Facebook</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Card>
      <Card style={styles.card}>
        <HeadingTitle>Address</HeadingTitle>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Text style={styles.textColor}>45 Gateway Dr</Text>
            <Text style={styles.textColor}>Mechaanicsburg, PA-17050</Text>
          </View>

          <TouchableOpacity onPress={openDirection} style={styles.customButton}>
            <View style={styles.mapDirection}>
              <Text style={styles.textColor}>Get Direction</Text>
              <MaterialCommunityIcons
                name="google-maps"
                size={32}
                color={"white"}
              />
            </View>
          </TouchableOpacity>
        </View>
      </Card>

      <Card style={styles.card}>
        <HeadingTitle>Bussiness Hours</HeadingTitle>
        <HoursContainer name="Sunday" hours="10:00 AM - 7:00 PM" />
        <HoursContainer name="Monday" hours="10:00 AM - 7:00 PM" />
        <HoursContainer name="Tuesday" hours="Closed" />
        <HoursContainer name="Wednesday" hours="10:00 AM - 7:00 PM" />
        <HoursContainer name="Thursday" hours="10:00 AM - 7:00 PM" />
        <HoursContainer name="Friday" hours="10:00 AM - 7:00 PM" />
        <HoursContainer name="Saturday" hours="10:00 AM - 7:00 PM" />
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundViewColor,
  },
  card: {
    width: "95%",
    backgroundColor: Colors.primaryDarkColor,
  },
  customButton: {
    marginVertical: 10,
    backgroundColor: "#498ADF",
    alignSelf: "flex-start",
    borderRadius: 10,
    elevation: 5,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  mapDirection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  textColor: {
    color: Colors.secondaryTextColor,
    alignItems: "center",
  },
  image: {
    height: "100%",
    width: "100%",

    alignItems: "center",
    marginVertical: 10,
    borderRadius: 10,
  },
  call: {
    marginVertical: 10,
    backgroundColor: "#498ADF",
    alignSelf: "flex-start",
    borderRadius: 10,
    elevation: 5,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowRadius: 10,
    flexDirection: "row",
  },
});
