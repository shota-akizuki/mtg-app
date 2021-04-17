import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import WebView from "react-native-webview";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  cardContainer: {
    width: "100%",
  },
});

export const CardScreen = ({ route }) => {
  const { card } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <WebView style={styles.cardContainer} source={{ uri: card.imageUrl }} />
    </SafeAreaView>
  );
};
