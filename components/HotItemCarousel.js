import React, { useState, useCallback, useRef } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Dimensions,
  ImageBackground,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import Carousel from "react-native-snap-carousel";
const { width, height } = Dimensions.get("window");

const CustomCarousel = ({ product, nav }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselItems, setCarouselItems] = useState(product);
  const ref = useRef(null);

  const renderItem = useCallback(
    ({ item, index }) => (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {
          nav.navigate({
            routeName: "ItemDetail",
            params: {
              selectedItem: item,
            },
          });
        }}
      >
        <View
          style={{
            borderRadius: 50,
            height: 250,
            paddingLeft: 50,
            marginLeft: 0,
            marginRight: 25,
          }}
        >
          <View
            style={{
              borderRadius: 10,
              flex: 1,
              backgroundColor: "red",
              overflow: "hidden",
            }}
          >
            <ImageBackground
              source={{
                uri: item.thumbNail,
              }}
              resizeMode="cover"
              style={{
                width: width,
                height: 250,
              }}
            >
              <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 30 }}>{item.name}</Text>
                <Text>{item.weight} grams</Text>
              </View>
            </ImageBackground>
          </View>
        </View>
      </TouchableOpacity>
    ),
    []
  );

  return (
    <Carousel
      layout={"stack"}
      layoutCardOffset={15}
      ref={ref}
      data={product}
      sliderWidth={width}
      itemWidth={width}
      renderItem={renderItem}
      onSnapToItem={(index) => setActiveIndex(index)}
    />
  );
};

export default CustomCarousel;
