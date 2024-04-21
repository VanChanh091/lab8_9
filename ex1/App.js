import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { BottomNavigation } from "react-native-paper";
import MainView from "./src/view/HomeView";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import SearchView from "./src/view/SearchView";
import MyCourseView from "./src/view/MyCourseView";
import ProfileView from "./src/view/ProfileView";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={MainView}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => {
              return <Ionicons name="home-outline" size={size} color={color} />;
            },
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchView}
          options={{
            tabBarLabel: "Search",
            tabBarIcon: ({ color, size }) => {
              return (
                <Ionicons name="search-outline" size={size} color={color} />
              );
            },
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="MyCourse"
          component={MyCourseView}
          options={{
            tabBarLabel: "MyCourse",
            tabBarIcon: ({ color, size }) => {
              return <Ionicons name="book-outline" size={size} color={color} />;
            },
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileView}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }) => {
              return (
                <Ionicons name="person-outline" size={size} color={color} />
              );
            },
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
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
