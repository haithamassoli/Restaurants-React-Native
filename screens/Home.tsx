import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import { data } from "../data";

interface resturantsCityProps {
  navigation?: any;
  route: any;
}

const Home = ({ route, navigation }: resturantsCityProps) => {
  return (
    <ScrollView>
      {data
        .filter((city) => city.city === "Amman")
        .map((city) =>
          city.resturants.map((resturant) => (
            <View key={resturant.id} style={styles.innerContainer}>
              <Pressable
                onPress={() =>
                  navigation.navigate("Meals", {
                    resturantId: resturant.id,
                    cityId: city.id,
                    // city: resturant.name,
                  })
                }
              >
                <Image
                  source={{ uri: resturant.image }}
                  style={{ height: "100%", width: "100%", resizeMode: "cover" }}
                  width={100}
                  height={100}
                />
                <Text style={styles.text}>{resturant.name}</Text>
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
    // width: "100%",
    margin: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
    elevation: 10,
    height: 180,
    shadowColor: "black",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    zIndex: 3,
    position: "absolute",
    bottom: 0,
    left: "50%",
    transform: [{ translateX: -50 }],
    color: "white",
  },
});

export default Home;
