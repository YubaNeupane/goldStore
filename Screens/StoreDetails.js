import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Card from "../components/Card";
import HeadingTitle from "../components/HeadingTitle";
import HoursContainer from "../components/HoursContainer";

export default function StoreDetails() {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <Card style={styles.card}>
          <HeadingTitle>Address</HeadingTitle>
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
});
