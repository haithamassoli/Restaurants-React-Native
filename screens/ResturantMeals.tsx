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
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import Meal from "../components/Meal";

type mealsProps = NativeStackScreenProps<RootStackParamList, "ResturantMeals">;

const { width } = Dimensions.get("window");

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
              />
              <Text style={{ textAlign: "center" }}>{item.name}</Text>
            </>
          )}
          sliderWidth={width}
          itemWidth={100}
        />
      </View>
      <View
        style={{
          backgroundColor: Colors.primaryLightest,
          paddingBottom: 30,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{ marginTop: 20, marginLeft: 20, alignSelf: "flex-start" }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Popular for Breakfast
          </Text>
          <Text style={{ fontSize: 12, color: Colors.gray }}>
            Start your day with the right mind
          </Text>
        </View>
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
            />
          )}
          sliderWidth={width - 50}
          itemWidth={250}
          onSnapToItem={(index) => setActiveSlide(index)}
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
              <Meal title={meal.name} image={meal.image} price={meal.price} />
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
    borderRadius: 15,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    backgroundColor: "#fff",
    elevation: 5,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    overflow: "hidden",
    marginTop: 15,
  },
  text: {
    fontSize: 20,
    color: "#000",
  },
});
