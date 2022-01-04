import React, { useState, useCallback, useRef } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Dimensions,
  ImageBackground,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import Colors from "../constants/Colors";

import Carousel from "react-native-snap-carousel";
const { width, height } = Dimensions.get("window");

function currencyFormat(num) {
  return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

const CustomCarousel = ({ product, nav }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselItems, setCarouselItems] = useState(product);
  const ref = useRef(null);

  const goldPriceT = useSelector((state) => state.goldPrice);
  const getCurrentGoldPrice = goldPriceT.price;

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
              <View
                style={{
                  backgroundColor: Colors.primaryDarkColor,
                  width: "35%",
                  borderBottomRightRadius: 50,
                  overflow: "hidden",
                }}
              >
                <View style={{ padding: 10 }}>
                  <Text
                    style={{
                      fontSize: 30,
                      color: Colors.primaryLightColor,
                      fontFamily: "cinzel-bold",
                    }}
                    numberOfLines={1}
                  >
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      color: Colors.secondaryTextColor,
                      fontFamily: "cinzel-semiBold",
                    }}
                  >
                    {item.weight} grams
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      color: Colors.secondaryTextColor,
                      fontFamily: "cinzel-semiBold",
                    }}
                  >
                    {currencyFormat(
                      parseInt(item.price) +
                        parseInt(item.weight) * getCurrentGoldPrice
                    )}
                  </Text>
                </View>
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
      autoplay
      loop
      enableMomentum={false}
      onSnapToItem={(index) => setActiveIndex(index)}
    />
  );
};

export default CustomCarousel;
