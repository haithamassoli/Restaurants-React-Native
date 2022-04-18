import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import { data } from "../data";

interface mealsProps {
  navigation?: any;
  route?: any;
}
const ResturantMeals = ({ route, navigation }: mealsProps) => {
  const filteredResturantsCity = data.filter(
    (city) => city.id === route.params.cityId
  );

  const filteredResturants = filteredResturantsCity[0].resturants.filter(
    (resturant) => resturant.id === route.params.resturantId
  );
  // console.log(filteredResturants);
  // console.log(route.params);
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.outerContainer}>
        {filteredResturants[0].meals.map((meal) => (
          <View key={meal.id} style={styles.innerContainer}>
            <Pressable
              onPress={() =>
                navigation.navigate("Meal", {
                  mealId: meal.id,
                  cityId: route.params.cityId,
                  resturantId: route.params.resturantId,
                })
              }
            >
              <Image
                source={{ uri: meal.image }}
                style={{ width: 100, height: 100 }}
                width={100}
                height={100}
              />
              <Text style={styles.text}>{meal.name}</Text>
            </Pressable>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default ResturantMeals;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
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
  },
  text: {
    fontSize: 20,
    position: "absolute",
    bottom: 0,
    left: 0,
  },
});
