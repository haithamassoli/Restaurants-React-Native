import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { Ionicons } from "@expo/vector-icons";

import Home from "./screens/Home";
import Register from "./screens/Register";
import AllCities from "./screens/AllCities";
import Search from "./screens/Search";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

interface bottomTabsNavigationProps {
  route: any;
  navigation?: any;
}
function BottomTabsNavigation({
  route,
  navigation,
}: bottomTabsNavigationProps) {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        tabBarStyle: styles.bottomTabs,
        tabBarIconStyle: { display: "none" },
        tabBarLabelStyle: { display: "none" },
        headerRight: () => (
          <Text onPress={() => navigation.replace("AllCities")}>
            {route.params.city}
          </Text>
        ),
        //   <View>
        //   <Pressable onPress={() => navigation.replace("AllCities")}>
        //     <Text>{route.params.city}</Text>,
        //   </Pressable>
        // </View>
        // headerStyle: {  },
        // headerTintColor: "white",
        // tabBarActiveTintColor: "blue",
        // headerShown: false,
      }}
    >
      <BottomTabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={"black"} size={size} />
          ),
          tabBarIconStyle: { display: "flex" },
        }}
      />
      <BottomTabs.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" color={"black"} size={size} />
          ),
          tabBarIconStyle: { display: "flex" },
        }}
      />
      <BottomTabs.Screen
        name="AllEasdasdxssspenses"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" color={"black"} size={size} />
          ),
          tabBarIconStyle: { display: "flex" },
        }}
      />
      <BottomTabs.Screen
        name="Register"
        component={Register}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={"black"} size={size} />
          ),
          tabBarIconStyle: { display: "flex" },
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="AllCities" component={AllCities} />
          <Stack.Screen
            name="BottomTabsNavigation"
            component={BottomTabsNavigation}
            options={{
              title: "Haitham",
              headerTitleStyle: {
                fontWeight: "bold",
                fontSize: 20,
              },
              headerShown: false,
            }}
          />
        </Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
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
  bottomTabs: {
    padding: 10,
    height: 70,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
    elevation: 10,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
});
