import { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Pressable,
  Dimensions,
} from "react-native";
import { data, categories } from "../data";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { Colors } from "../constants/Colors";

interface mealsProps {
  navigation?: any;
  route?: any;
}

const { width, height } = Dimensions.get("window");

const ResturantMeals = ({ route, navigation }: mealsProps) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const filteredResturantsCity = data.filter(
    (city) => city.id === route.params.cityId
  );

  const filteredResturants = filteredResturantsCity[0].resturants.filter(
    (resturant) => resturant.id === route.params.resturantId
  );
  const mealsData = filteredResturants[0].meals;
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Carousel
          data={mealsData}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item.image }}
              style={{
                width: "100%",
                height: 200,
                resizeMode: "cover",
                borderRadius: 20,
                marginTop: 20,
              }}
              width={100}
              height={100}
            />
          )}
          sliderWidth={width - 50}
          itemWidth={width - 50}
          pagingEnabled={true}
          autoplay={true}
          loop={true}
          onSnapToItem={(index) => setActiveSlide(index)}
        />
        <Pagination
          activeDotIndex={activeSlide}
          dotsLength={mealsData.length}
          dotStyle={{
            width: 20,
            height: 20,
            borderRadius: 10,
            marginHorizontal: 8,
            opacity: 0.1,
            borderColor: Colors.primaryLightest,
            borderWidth: 2,
            backgroundColor: Colors.primaryLight,
          }}
        />
      </View>
      <View>
        <Carousel
          data={categories}
          firstItem={3}
          renderItem={({ item }) => (
            <>
              <Image
                source={item.image}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 50,
                  resizeMode: "cover",
                }}
                width={100}
                height={100}
              />
              <Text style={{ textAlign: "center" }}>{item.name}</Text>
            </>
          )}
          sliderWidth={width}
          itemWidth={100}
        />
      </View>
      <View style={styles.outerContainer}>
        {mealsData.map((meal) => (
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
                style={{ width: "100%", height: 200, resizeMode: "cover" }}
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
    padding: 15,
  },
  innerContainer: {
    width: "47%",
    margin: 5,
    borderRadius: 10,
    backgroundColor: "#fff",
    elevation: 10,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    overflow: "hidden",
  },
  text: {
    fontSize: 20,
    position: "absolute",
    bottom: 0,
    left: 0,
    color: "white",
    fontWeight: "bold",
  },
});
