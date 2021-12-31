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

const exampleItems = [
  {
    title: "Item 1",
    text: "Text 1",
    image:
      "https://thumbs.dreamstime.com/b/rainbow-love-heart-background-red-wood-60045149.jpg",
  },
  {
    title: "Item 2",
    text: "Text 2",
    image:
      "https://thumbs.dreamstime.com/b/rainbow-love-heart-background-red-wood-60045149.jpg",
  },
  {
    title: "Item 3",
    text: "Text 3",
    image:
      "https://thumbs.dreamstime.com/b/rainbow-love-heart-background-red-wood-60045149.jpg",
  },
  {
    title: "Item 4",
    text: "Text 4",
    image:
      "https://thumbs.dreamstime.com/b/rainbow-love-heart-background-red-wood-60045149.jpg",
  },
  {
    title: "Item 5",
    text: "Text 5",
    image:
      "https://thumbs.dreamstime.com/b/rainbow-love-heart-background-red-wood-60045149.jpg",
  },
];

const CustomCarousel = ({ product, nav }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselItems, setCarouselItems] = useState(exampleItems);
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
      layoutCardOffset={`10`}
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
