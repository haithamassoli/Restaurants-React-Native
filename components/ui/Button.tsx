import { View, Text, Pressable, StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

interface ButtonProps {
  children: string;
  style?: {};
}

const Button = ({ children, style }: ButtonProps) => {
  return (
    <View style={[styles.outerContainer, style]}>
      <Pressable
        style={({ pressed }) => [
          styles.innerContainer,
          pressed && styles.press,
        ]}
        android_ripple={{ borderless: true }}
      >
        <Text style={[styles.text]}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  press: {},
  outerContainer: {
    margin: 10,
    borderRadius: 10,
    elevation: 10,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    backgroundColor: "white",
  },

  innerContainer: {
    padding: 20,
  },
  text: {
    fontSize: 13,
    color: Colors.secondary,
  },
});
