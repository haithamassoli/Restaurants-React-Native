import { useLayoutEffect, useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, Image } from "react-native";
import Checkbox from "expo-checkbox";
import Button from "../../components/ui/Button";
import { Colors } from "../../constants/Colors";
import { BottomTabParamList } from "../../App";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

type loginProps = BottomTabScreenProps<BottomTabParamList, "Login">;

const Login = ({ navigation, route }: loginProps) => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [isChecked, setChecked] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      tabBarStyle: { display: "none" },
    });
  }, [navigation]);

  const register = route.params.register === "login" ? true : false;
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{register ? "Sign In" : "Sign Up"}</Text>
      <Text style={styles.text}>Email</Text>
      <TextInput
        value={formValues.email}
        onChangeText={(text) => setFormValues({ ...formValues, email: text })}
        placeholder="Email"
        style={styles.input}
      />
      <Text style={styles.text}>Password</Text>

      <TextInput
        value={formValues.password}
        onChangeText={(text) =>
          setFormValues({ ...formValues, password: text })
        }
        placeholder="Password"
        style={styles.input}
      />
      <View style={styles.flex}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? Colors.primary : undefined}
          />
          <Text>Remember me</Text>
        </View>
        {register && <Text>Forgot Password?</Text>}
      </View>
      <View style={{ flex: 1, justifyContent: "flex-end", marginRight: 30 }}>
        <Button
          onPress={() => {
            console.log(formValues);
          }}
          style={styles.button}
        >
          Sign In
        </Button>
        {register && (
          <>
            <Button
              style={[
                styles.button,
                { marginTop: 10, backgroundColor: "white" },
              ]}
              textStyle={{ color: "#333" }}
              image={require("../../assets/Google-Logo.png")}
              onPress={() =>
                navigation.navigate("Login", {
                  register: "signup",
                })
              }
            >
              &nbsp; Sign In With
            </Button>
            <Button
              style={[
                styles.button,
                { marginTop: 10, backgroundColor: "white", color: "#333" },
              ]}
              textStyle={{ color: "#333" }}
              image={require("../../assets/Apple-Logo.png")}
              onPress={() =>
                navigation.navigate("Login", {
                  register: "signup",
                })
              }
            >
              &nbsp; Sign In With
            </Button>
          </>
        )}
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 30,
    marginTop: 70,
  },
  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 30,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: Colors.primary,
    marginBottom: 30,
  },
  text: {
    fontSize: 16,
    marginTop: 20,
  },
  imageContainer: {
    marginHorizontal: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    marginVertical: 10,
    borderColor: Colors.secondary,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 30,
  },
  checkbox: {
    marginVertical: 10,
    marginRight: 10,
  },
  button: {
    backgroundColor: Colors.primary,
    justifyContent: "flex-start",
    bottom: 100,
    width: "100%",
  },
});
