import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

interface discountLableProps {
  discount: string;
}

const DiscountLable = ({ discount }: discountLableProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{discount}% Off</Text>
    </View>
  );
};

export default DiscountLable;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "flex-end",
    backgroundColor: Colors.primary,
    position: "absolute",
    top: 50,
    left: 0,
    padding: 6,
    width: 100,
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
    paddingRight: 10,
  },
});
