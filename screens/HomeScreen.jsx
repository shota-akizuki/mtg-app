import React, { useState, useEffect } from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import axios from "axios";
import { ListItem } from "../components/ListItem";

const url = `https://api.magicthegathering.io/v1/cards`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
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
    justifyContent: "space-between",
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

export const HomeScreen = ({ navigation }) => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      const response = await axios.get(url);
      setCards(response.data.cards);
      console.log(response);
      console.log(cards);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={cards}
        renderItem={({ item }) => (
          <ListItem
            imageUrl={item.imageUrl}
            name={item.name}
            types={item.types}
            text={item.text}
            onPress={() => navigation.navigate("Card", { card: item })}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};
