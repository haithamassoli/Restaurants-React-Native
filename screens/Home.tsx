import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import { data } from "../data";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../constants/Colors";

interface resturantsCityProps {
  navigation?: any;
  route: any;
}

const Home = ({ route, navigation }: resturantsCityProps) => {
  return (
    <ScrollView>
      {data
        .filter(
          (city) => city.city === (route.params ? route.params.city : "Amman")
        )
        .map((city) =>
          city.resturants.map((resturant) => (
            <View key={resturant.id} style={styles.innerContainer}>
              <Pressable
                onPress={() =>
                  navigation.navigate("ResturantMeals", {
                    resturantId: resturant.id,
                    cityId: city.id,
                    // city: resturant.name,
                  })
                }
              >
                <Image
                  source={{ uri: resturant.image }}
                  style={{ height: 200, width: "100%", resizeMode: "cover" }}
                  width={100}
                  height={200}
                />
                <View
                  style={{
                    paddingBottom: 8,
                    paddingHorizontal: 10,
                    paddingTop: 10,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Text style={styles.text}>{resturant.name}</Text>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Ionicons
                        style={{ marginRight: 5 }}
                        name="star"
                        size={20}
                        color={Colors.primaryLight}
                      />
                      <Text style={styles.text}>3.7</Text>
                    </View>
                  </View>
                  <Text style={{ color: Colors.gray }}>Italian - Indian</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: 10,
                    }}
                  >
                    <Ionicons name="time" color={Colors.primary} size={24} />
                    <Text>30 mins - 1.3km</Text>
                  </View>
                </View>
              </Pressable>
            </View>
          ))
        )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  innerContainer: {
    margin: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
    elevation: 10,
    shadowColor: "black",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
});

export default Home;
