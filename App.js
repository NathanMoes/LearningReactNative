import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import TabsBarBottomScreen from "./components/tabsBar";
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "./pages/HomePage";
import SettingsScreen from "./pages/SettingsScreen";
import Books from "./pages/Books";

const Tab = createBottomTabNavigator();

export default function App() {
  const [number, setNumber] = useState(0);
  const onClickHander = () => {
    setNumber((prev) => {
      return prev + 1;
    });
  };
  return (
    <NavigationContainer
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            } else if (route.name === "Settings") {
              iconName = focused ? "ios-list" : "ios-list-outline";
            } else if (route.name === "Books") {
              iconName = focused ? "ios-book" : "ios-book-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Books" component={Books} />
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
