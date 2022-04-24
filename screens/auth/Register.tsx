import { useLayoutEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Button from "../../components/ui/Button";
import { Colors } from "../../constants/Colors";

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
        source={require("../../assets/RegisterBackground.png")}
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
            source={require("../../assets/White-Logo.png")}
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
          <Button
            style={{ backgroundColor: Colors.primary, marginHorizontal: 30 }}
            onPress={() =>
              navigation.navigate("Login", {
                register: "signup",
              })
            }
          >
            Sign Up
          </Button>
          <Button
            style={{
              backgroundColor: "white",
              marginHorizontal: 30,
              marginTop: 10,
            }}
            onPress={() =>
              navigation.navigate("Login", {
                register: "signup",
              })
            }
            textStyle={{ color: "#333" }}
            image={require("../../assets/Google-Logo.png")}
          >
            &nbsp; Sign In With
          </Button>
          <Button
            style={{
              backgroundColor: "white",
              marginHorizontal: 30,
              marginTop: 10,
            }}
            onPress={() =>
              navigation.navigate("Login", {
                register: "signup",
              })
            }
            textStyle={{ color: "#333" }}
            image={require("../../assets/Apple-Logo.png")}
          >
            &nbsp; Sign In With
          </Button>
          <Text
            style={styles.text}
            onPress={() =>
              navigation.navigate("Login", {
                register: "login",
              })
            }
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
  text: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    marginTop: 20,
  },
});
