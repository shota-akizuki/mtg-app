import React from "react";
import { SafeAreaView, StyleSheet, Image } from "react-native";
import WebView from "react-native-webview";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  cardImage: {
    marginTop: 40,
    height: 500,
    width: 360,
  },
});

export const CardScreen = ({ route }) => {
  const { card } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.cardImage}
        source={{
          uri: card.imageUrl,
        }}
      />
    </SafeAreaView>
  );
};
