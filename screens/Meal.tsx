import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import { data } from "../data";

interface mealProps {
  navigation?: any;
  route?: any;
}
const Meal = ({ route, navigation }: mealProps) => {
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
        {filteredMeal.map((meal) => (
          <View key={meal.id} style={styles.innerContainer}>
            <Pressable
            // onPress={() =>
            //   navigation.replace("BottomTabsNavigation", {
            //     mealId: meal.id,
            //   })
            // }
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

export default Meal;

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
