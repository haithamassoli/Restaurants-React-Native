import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import Button from "../components/ui/Button";
import { Colors } from "../constants/Colors";

const Register = () => {
  return (
    <View style={styles.container}>
      <Text>Register</Text>
      <ImageBackground
        style={{ width: 100, height: 100 }}
        source={require("../assets/icon.png")}
      />
      <Image
        style={{ width: 100, height: 100 }}
        source={require("../assets/icon.png")}
      />
      <Button style={{ backgroundColor: Colors.primary }}>Sign Up</Button>
      <Button style={{ color: Colors.secondary }}>Login</Button>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
