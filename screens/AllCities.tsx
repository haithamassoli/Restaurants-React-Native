import { useLayoutEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { LinearGradient } from "expo-linear-gradient";
import { data } from "../data";
import { BottomTabParamList } from "../App";

type allCitiesProps = BottomTabScreenProps<BottomTabParamList, "AllCities">;

const AllCities = ({ navigation }: allCitiesProps) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      tabBarStyle: { display: "none" },
    });
  }, [navigation]);

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.outerContainer}>
        {data.map((city) => (
          <View key={city.id} style={styles.innerContainer}>
            <Pressable
              onPress={() =>
                navigation.navigate("Home", {
                  screen: "ResturantsCity",
                  params: {
                    id: city.id,
                    city: city.city,
                  },
                })
              }
            >
              <LinearGradient
                style={styles.linearGradient}
                colors={["transparent", "transparent", "#111"]}
              />
              <ImageBackground
                source={{ uri: city.cityImage }}
                style={{ width: "100%", height: 120 }}
                height={120}
              >
                <Text style={styles.text}>{city.city}</Text>
              </ImageBackground>
            </Pressable>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default AllCities;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginTop: 30,
  },
  innerContainer: {
    width: "40%",
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    elevation: 10,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    overflow: "hidden",
    // justifyContent: "center",
    // alignItems: "center",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    color: "white",
    height: 120,
    textAlignVertical: "center",
  },
  linearGradient: {
    height: 120,
    width: 200,
    borderRadius: 10,
    position: "absolute",
    zIndex: 10,
  },
});
