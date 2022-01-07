import React, { useRef, useState, useEffect } from "react";
import Carousel, {
  ParallaxImage,
  Pagination,
} from "react-native-snap-carousel";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";

const { width: screenWidth } = Dimensions.get("window");

const ItemDetailsCarousel = (props) => {
  const [entries, setEntries] = useState([{ image: props.item.thumbNail }]);
  const [activeSlide, setActiveslide] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const data = [
      {
        image: props.item.thumbNail,
      },
    ];
    for (let i = 0; i < props.item.images.length; i++) {
      if (props.item.images[i] === "") continue;

      data.push({ image: props.item.images[i] });
    }
    setEntries(data);
  }, []);

  const renderItem = ({ item, index }, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{ uri: item.image }}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.01}
          showSpinner
          fadeDuration={1}
          {...parallaxProps}
          lazyLoad
        />
      </View>
    );
  };

  return (
    <View>
      <Carousel
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        ref={carouselRef}
        itemWidth={screenWidth - 60}
        data={entries}
        fadeDuration={1000}
        onSnapToItem={(index) => setActiveslide(index)}
        renderItem={renderItem}
        hasParallaxImages={true}
        removeClippedSubviews={false}
      />
      <Pagination
        dotsLength={entries.length}
        activeDotIndex={activeSlide}
        tappableDots
        carouselRef={carouselRef}
        containerStyle={{
          backgroundColor: "rgba(0, 0, 0, 0)",
          marginVertical: 0,
          top: -140,
        }}
        dotStyle={{
          width: 20,
          height: 20,
          borderRadius: 10,
          marginHorizontal: 8,
          backgroundColor: "rgba(255, 255, 255, 0.92)",
        }}
        inactiveDotStyle={
          {
            // Define styles for inactive dots here
          }
        }
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
};

export default ItemDetailsCarousel;

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  item: {
    width: screenWidth - 60,
    height: screenWidth - 60,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: "red",
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "contain",
  },
});
