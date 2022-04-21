import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Platform,
  StatusBar as reactNativeStatusBar,
} from "react-native";
import {
  NavigationContainer,
  NavigatorScreenParams,
} from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Home from "./screens/Home";
import Register from "./screens/auth/Register";
import AllCities from "./screens/AllCities";
import Search from "./screens/Search";
import ResturantMeals from "./screens/ResturantMeals";
import Meal from "./screens/Meal";
import Favorite from "./screens/Favorite";
import Login from "./screens/auth/Login";
import { Colors } from "./constants/Colors";

export type BottomTabParamList = {
  Home: NavigatorScreenParams<RootStackParamList>;
  Register: undefined;
  AllCities: undefined;
  Search: undefined;
  ResturantMeals: { resturantId: string; cityId: string };
  Meal: { resturantId: string; cityId: string; mealId: string };
  Favorite: undefined;
  Login: undefined;
};

export type RootStackParamList = {
  ResturantsCity: { id: number; city: string };
  ResturantMeals: undefined;
  Meal: undefined;
};

export type RestaurantsStackParams = {};

const Stack = createNativeStackNavigator<RootStackParamList>();
const BottomTabs = createBottomTabNavigator<BottomTabParamList>();

interface MealsProps {
  route: any;
  navigation?: any;
}

// type MealsProps = NativeStackScreenProps<RootStackParamList, ''>;
interface userOverviewProps {
  route: any;
  navigation?: any;
}

function Meals({ route, navigation }: MealsProps) {
  return (
    <Stack.Navigator
      screenOptions={{ contentStyle: { backgroundColor: "white" } }}
    >
      <Stack.Screen
        name="ResturantsCity"
        component={Home}
        options={{
          // headerShown: false,
          title: "",
          headerLeft: () => (
            <>
              <Text
                style={{ marginHorizontal: 20 }}
                onPress={() => navigation.navigate("AllCities")}
              >
                {route.params && route.params.params
                  ? route.params.params.city
                  : "Amman"}
              </Text>
            </>
          ),
          headerRight: () => (
            <>
              <Ionicons
                name="location-outline"
                color={Colors.primary}
                size={20}
              />
              <Text
                style={{ marginRight: 20 }}
                onPress={() => navigation.navigate("AllCities")}
              >
                {route.params && route.params.params
                  ? route.params.params.city
                  : "Amman"}
              </Text>
            </>
          ),
        }}
      />
      <Stack.Screen name="ResturantMeals" component={ResturantMeals} />
      <Stack.Screen name="Meal" component={Meal} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.safeAreaView}>
        <NavigationContainer>
          <BottomTabs.Navigator
            screenOptions={({ navigation, route }: any) => ({
              tabBarActiveTintColor: Colors.primaryLight,
              tabBarInactiveTintColor: "white",
              contentStyle: { backgroundColor: "#fff" },
              tabBarStyle: styles.bottomTabs,
              tabBarIconStyle: { display: "none" },
              tabBarLabelStyle: { display: "none" },
              headerShown: false,
              cardStyle: { backgroundColor: "white" },
              headerRight: () => (
                <Text
                  style={{ marginHorizontal: 20 }}
                  onPress={() => navigation.navigate("AllCities")}
                >
                  {route.params && route.params.params
                    ? route.params.params.city
                    : "Amman"}
                </Text>
              ),
            })}
          >
            <BottomTabs.Screen
              name="Home"
              component={Meals}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="home" color={color} size={size} />
                ),
                tabBarIconStyle: { display: "flex" },
              }}
            />
            <BottomTabs.Screen
              name="AllCities"
              component={AllCities}
              options={({ navigation, route }: any) => ({
                title: "Pick a city",
                tabBarItemStyle: { display: "none" },
              })}
            />

            <BottomTabs.Screen
              name="Search"
              component={Search}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="search" color={color} size={size} />
                ),
                tabBarIconStyle: { display: "flex" },
              }}
            />
            <BottomTabs.Screen
              name="Favorite"
              component={Favorite}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="heart-outline" color={color} size={size} />
                ),
                tabBarIconStyle: { display: "flex" },
                tabBarBadge: 3,
                tabBarBadgeStyle: {
                  backgroundColor: Colors.primaryLight,
                  color: "white",
                },
              }}
            />
            <BottomTabs.Screen
              name="Register"
              component={Register}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="person" color={color} size={size} />
                ),
                tabBarIconStyle: { display: "flex" },
              }}
            />
            <BottomTabs.Screen
              name="Login"
              component={Login}
              options={{
                tabBarItemStyle: { display: "none" },
              }}
            />
          </BottomTabs.Navigator>
        </NavigationContainer>
      </SafeAreaView>
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
    height: 70,
    elevation: 10,
    shadowColor: "black",
    backgroundColor: Colors.primaryDark,
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: "white",
    paddingTop:
      Platform.OS === "android" ? reactNativeStatusBar.currentHeight : 0,
  },
});
