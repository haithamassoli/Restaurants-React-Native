import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

interface ButtonProps {
  children: string;
  style?: {};
  textStyle?: {};
  image?: any;
  onPress?: () => void;
}

const Button = ({
  children,
  onPress,
  style,
  textStyle,
  image,
}: ButtonProps) => {
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
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {image ? (
            <Image style={{ width: 20, height: 20 }} source={image} />
          ) : null}
          <Text style={[styles.text, textStyle]}>{children}</Text>
        </View>
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
