import React, { useRef, useEffect } from "react";
import { Button, StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";

export default function App() {
  const animation = useRef(null);
  useEffect(() => {
    animation.current?.play();
  }, []);

  return (
    <View style={styles.animationContainer}>
      <View styl={styles.logo}>
        <LottieView
          autoPlay
          ref={animation}
          style={{
            width: 100,
            height: 100,
            backgroundColor: "red",
            borderRadius: 20,
          }}
          source={require("./assets/data.json")}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title=""
          onPress={() => {
            animation.current?.reset();
            animation.current?.play();
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  animationContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },

  buttonContainer: {
    paddingTop: 20,
  },
});
