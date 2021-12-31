import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import GoldNavigation from "./navigator/GoldNavigation";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { enableScreens } from "react-native-screens";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";

import goldPriceReducer from "./apiCall/reducers/goldPriceReducers";
import productReducer from "./apiCall/reducers/productReducer";
import thunk from "redux-thunk";
import ShoppingCartReducer from "./apiCall/reducers/ShoppingCartReducer";
import CategoriesReducer from "./apiCall/reducers/CategoriesReducer";

enableScreens();
const rootReducr = combineReducers({
  goldPrice: goldPriceReducer,
  product: productReducer,
  shoppingCart: ShoppingCartReducer,
  categories: CategoriesReducer,
});

const store = createStore(rootReducr, compose(applyMiddleware(thunk)));

const fetchFonts = () => {
  return Font.loadAsync({
    "cinzel-regular": require("./assets/fonts/Cinzel/Cinzel-Regular.ttf"),
    "cinzel-medium": require("./assets/fonts/Cinzel/Cinzel-Medium.ttf"),
    "cinzel-semiBold": require("./assets/fonts/Cinzel/Cinzel-SemiBold.ttf"),
    "cinzel-bold": require("./assets/fonts/Cinzel/Cinzel-Bold.ttf"),
    "cinzel-extraBold": require("./assets/fonts/Cinzel/Cinzel-ExtraBold.ttf"),
    "cinzel-black": require("./assets/fonts/Cinzel/Cinzel-Black.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(error) => console.log(error)}
      />
    );
  }

  return (
    <Provider store={store}>
      <GoldNavigation />
    </Provider>
  );
}

const styles = StyleSheet.create({});
