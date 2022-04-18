import { useLayoutEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Button from "../components/ui/Button";
import { Colors } from "../constants/Colors";

interface registerProps {
  navigation: any;
}

const Register = ({ navigation }: registerProps) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      tabBarStyle: { display: "none" },
    });
  }, [navigation]);
  return (
    <>
      <Image
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          resizeMode: "cover",
        }}
        source={require("../assets/RegisterBackground.png")}
      />
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            zIndex: 2,
          }}
        >
          <Image
            style={{ width: "50%", height: 100, marginTop: 20, zIndex: 2 }}
            source={require("../assets/White-Logo.png")}
          />
        </View>
        <View
          style={{
            width: "100%",
            height: "100%",
            flex: 1,
            justifyContent: "flex-end",
            marginBottom: 100,
          }}
        >
          <View style={styles.flex}>
            <View style={styles.imageContainer}>
              <Image
                width={30}
                height={30}
                source={require("../assets/Google-Logo.png")}
              />
            </View>
            <View style={styles.imageContainer}>
              <Image
                width={30}
                height={30}
                source={require("../assets/Apple-Logo.png")}
              />
            </View>
          </View>
          <Button style={{ backgroundColor: Colors.primary }}>Sign Up</Button>
          <Text
            style={styles.text}
            onPress={() => alert("Sign Up with Facebook")}
          >
            Have an account?
            <Text
              style={{
                color: Colors.primary,
                fontWeight: "bold",
              }}
            >
              Sign In
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  flex: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
  imageContainer: {
    marginHorizontal: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
