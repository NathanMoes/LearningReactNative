import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const [number, setNumber] = useState(0);
  const onClickHander = () => {
    setNumber((prev) => {
      return prev + 1;
    });
  };
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <StatusBar style="auto" />
      <Button title={`${number}`} onPress={onClickHander}></Button>
    </View>
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
