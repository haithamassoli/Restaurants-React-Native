import { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../constants/Colors";

const { height } = Dimensions.get("window");

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Search...</Text>
      <View style={styles.searchContainer}>
        <Ionicons
          name="ios-search"
          size={24}
          color={Colors.primary}
          style={styles.searchIcon}
        />
        <TextInput
          value={searchInput}
          onChange={(searchString) => setSearchInput(searchString)}
          placeholder="Search..."
          style={styles.searchInput}
        />
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    marginHorizontal: 20,
  },
  header: {
    fontSize: 20,
    color: Colors.primary,
    fontWeight: "bold",
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: height / 5,
  },
  searchInput: {
    paddingLeft: 45,
    paddingRight: 20,
    paddingVertical: 10,
    borderRadius: 5,
    borderColor: Colors.secondary,
    borderWidth: 1,
    width: "100%",
  },
  searchIcon: {
    position: "absolute",
    left: 10,
  },
});
