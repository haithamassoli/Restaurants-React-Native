import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./screens/Home";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function HomeScreen() {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "red" },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: "green" },
        tabBarActiveTintColor: "blue",
        // headerShown: false,
      }}
    >
      <BottomTabs.Screen name="AllExpenses" component={Home} />
      <BottomTabs.Screen name="asd" component={Home} />
      <BottomTabs.Screen name="AllEasdasdxpenses" component={Home} />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ title: "hielfsdf" }}>
          <Stack.Screen name="HI" component={HomeScreen} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
