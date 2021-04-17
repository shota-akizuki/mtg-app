import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  itemContainer: {
    height: 120,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    flexDirection: "row",
  },
  leftContainer: {
    width: 90,
  },
  rightContainer: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
  },
  cardImage: {
    height: 120,
    width: 90,
  },
  text: {
    fontSize: 16,
  },
  subText: { fontSize: 16, color: "#333" },
});

export const ListItem = ({ imageUrl, name, types, text, onPress }) => {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
      <View style={styles.leftContainer}>
        {!!imageUrl && (
          <Image
            style={styles.cardImage}
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
        <Text numberOfLines={3} style={styles.subText}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
