import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Linking,
  TouchableOpacity,
} from "react-native";
import Card from "../components/Card";
import HeadingTitle from "../components/HeadingTitle";
import HoursContainer from "../components/HoursContainer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

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
    <ScrollView>
      <View style={styles.screen}>
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
              <Text>45 Gateway Dr</Text>
              <Text>Mechaanicsburg, PA-17050</Text>
            </View>

            <TouchableOpacity
              onPress={openDirection}
              style={styles.customButton}
            >
              <View style={styles.mapDirection}>
                <Text>Get Direction</Text>
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
          <View>
            <HoursContainer name="Sunday" hours="10:00 AM - 7:00 PM" />
            <HoursContainer name="Monday" hours="10:00 AM - 7:00 PM" />
            <HoursContainer name="Tuesday" hours="Closed" />
            <HoursContainer name="Wednesday" hours="10:00 AM - 7:00 PM" />
            <HoursContainer name="Thursday" hours="10:00 AM - 7:00 PM" />
            <HoursContainer name="Friday" hours="10:00 AM - 7:00 PM" />
            <HoursContainer name="Saturday" hours="10:00 AM - 7:00 PM" />
          </View>
        </Card>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  card: {
    width: "90%",
  },
  customButton: {
    marginVertical: 10,
    backgroundColor: Colors.secondaryLightColor,
    width: "40 %",
  },
  mapDirection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
