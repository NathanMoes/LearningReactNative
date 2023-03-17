import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../pages/HomePage";

const Tab = createBottomTabNavigator;

export default function TabsBarBottomScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
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
