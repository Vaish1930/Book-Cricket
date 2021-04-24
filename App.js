import "react-native-gesture-handler";

import { enableScreens } from "react-native-screens";
import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import CricketNavigation from "./app/navigations/CricketNavigation";
import { Provider } from "react-redux";

import store from "./app/features/store";

enableScreens();

const fetchFonts = () =>
  Font.loadAsync({
    roboto: require("./app/fonts/RobotoCondensed-Regular.ttf"),
    "roboto-bold": require("./app/fonts/RobotoCondensed-Bold.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onError={(error) => console.log(error)}
        onFinish={() => setFontsLoaded(true)}
      />
    );
  }

  return (
    <Provider store={store}>
      <CricketNavigation />
    </Provider>
  );
}
