import { View, Text, Pressable, StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

interface ButtonProps {
  children: string;
  style?: {};
  onPress?: () => void;
}

const Button = ({ children, style, onPress }: ButtonProps) => {
  return (
    <View style={[styles.outerContainer, style]}>
      <Pressable
        style={({ pressed }) => [
          styles.innerContainer,
          pressed && styles.press,
        ]}
        android_ripple={{ borderless: true }}
        onPress={onPress}
      >
        <Text style={[styles.text]}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  press: {
    opacity: 0.5,
  },
  outerContainer: {
    borderRadius: 10,
    elevation: 10,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    backgroundColor: "white",
  },

  innerContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  text: {
    fontSize: 15,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});
