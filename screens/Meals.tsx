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
const AllCities = ({ route, navigation }: mealsProps) => {
  console.log(route.params);
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.outerContainer}>
        {data
          .filter((city) => city.id == route.params.cityId)
          .filter((res) => res.resturants.includes(route.params.resturantId))
          .map((city) => (
            <View key={city.id} style={styles.innerContainer}>
              <Pressable
                onPress={() =>
                  navigation.replace("BottomTabsNavigation", {
                    id: city.id,
                    city: city.city,
                  })
                }
              >
                <Image
                  source={{ uri: city.cityImage }}
                  style={{ width: 100, height: 100 }}
                  width={100}
                  height={100}
                />
                <Text style={styles.text}>{city.city}</Text>
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
