import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import { data } from "../data";

import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Colors } from "../constants/Colors";
import { useLayoutEffect } from "react";

interface mealProps {
  navigation?: any;
  route?: any;
}

const { width, height } = Dimensions.get("window");

const Meal = ({ route, navigation }: mealProps) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation, route]);
  const filteredResturantsCity = data.filter(
    (city) => city.id === route.params.cityId
  );

  const filteredResturants = filteredResturantsCity[0].resturants.filter(
    (resturant) => resturant.id === route.params.resturantId
  );

  const filteredMeal = filteredResturants[0].meals.filter(
    (meal) => meal.id === route.params.mealId
  );

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.outerContainer}>
        <View style={styles.innerContainer}>
          <Image
            source={{ uri: filteredMeal[0].image }}
            style={{
              width: "100%",
              height: height / 2.2,
              resizeMode: "cover",
            }}
            height={100}
          />
          <View
            style={{
              height: 100,
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              position: "absolute",
            }}
          >
            <Ionicons
              name="ios-arrow-back"
              size={24}
              color={Colors.primary}
              style={{
                marginLeft: 20,
                top: 0,
                left: 0,
                zIndex: 13,
              }}
              onPress={() => navigation.goBack()}
            />
            <Ionicons
              name="heart-outline"
              color={"white"}
              size={24}
              style={{
                marginRight: 20,
                top: 0,
                left: 0,
                zIndex: 3,
              }}
            />
          </View>
          <Text style={styles.text}>{filteredMeal[0].name}</Text>
          <View style={styles.icons}>
            <Ionicons name="time" color={Colors.primary} size={24} />
            <Text style={styles.iconsText}>30 mins</Text>
            <FontAwesome5
              style={{ marginLeft: 10 }}
              name="fire"
              size={24}
              color={Colors.primary}
            />
            <Text style={styles.iconsText}>250 kcal</Text>
            <Ionicons
              style={{ marginLeft: 10 }}
              name="star"
              size={24}
              color="yellow"
            />
            <Text style={styles.iconsText}>4.6</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Meal;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  innerContainer: {
    width: "100%",
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    overflow: "hidden",
    backgroundColor: "#fff",
    elevation: 10,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    padding: 10,
    position: "absolute",
    color: "white",
    bottom: 30,
    left: 0,
  },
  icons: {
    position: "absolute",
    bottom: 10,
    left: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  iconsText: {
    fontSize: 12,
    marginLeft: 5,
    color: "white",
  },
});
