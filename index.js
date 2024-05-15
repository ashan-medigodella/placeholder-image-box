import React from "react";
import { View, StyleSheet } from "react-native";

// Define the Box component
function BoxImage({ width = 100, height = 100, backgroundColor = "gray" }) {
  // Styles for the box
  const boxStyle = {
    width,
    height,
    backgroundColor,
  };
  return <View style={[styles.box, boxStyle]} />;
}

// Define the styles
const styles = StyleSheet.create({
  box: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#ccc",
  },
});

export default BoxImage;
