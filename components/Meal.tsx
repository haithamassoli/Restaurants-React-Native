import { View, Text, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../constants/Colors";

interface MealProps {
  image: string;
  title: string;
  price: string;
}

const Meal = ({ image, title, price }: MealProps) => {
  return (
    <View>
      <Image
        source={{ uri: image }}
        style={{ width: "100%", height: 125, resizeMode: "cover" }}
      />
      <View
        style={{
          paddingHorizontal: 15,
          paddingTop: 15,
          paddingBottom: 10,
        }}
      >
        <Text style={styles.text}>{title}</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 5,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="time" color={Colors.primary} size={14} />
            <Text>{title}</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons
              style={{ marginLeft: 10 }}
              name="star"
              size={14}
              color={Colors.primaryLight}
            />
            <Text>4.6</Text>
          </View>
        </View>
        <Text style={{ fontWeight: "bold", fontSize: 24, marginTop: 10 }}>
          ${price}
        </Text>
      </View>
    </View>
  );
};

export default Meal;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: "#000",
  },
});
