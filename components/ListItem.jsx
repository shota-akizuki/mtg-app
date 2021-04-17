import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const styles = StyleSheet.create({
  itemContainer: {
    height: 100,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    flexDirection: "row",
  },
  leftContainer: {
    width: 100,
  },
  rightContainer: {
    flex: 1,
    padding: 10,
    justifyContent: "space-around",
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 16,
  },
  subText: { fontSize: 12, color: "gray" },
});

export const ListItem = ({ imageUrl, name, types, text }) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.leftContainer}>
        {!!imageUrl && (
          <Image
            style={styles.tinyLogo}
            source={{
              uri: imageUrl,
            }}
          />
        )}
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.text}>
          {name} / {types}
        </Text>
        <Text numberOfLines={3} style={styles.text}>
          {text}
        </Text>
        {/* <Text style={styles.subText}>{types}</Text> */}
      </View>
    </View>
  );
};
