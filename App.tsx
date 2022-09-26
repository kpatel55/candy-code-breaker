import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Board } from "./components/Board";
import { Nav } from "./components/Nav";
import { Selection } from "./components/Selection";
import BoardProvider from "./contexts/BoardContext";

export default function App() {
  return (
    <BoardProvider>
      <SafeAreaProvider>
        <View style={styles.container}>
          <Nav />
          <View style={styles.body}>
            <Board />
            <Selection />
          </View>
        </View>
      </SafeAreaProvider>
    </BoardProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // paddingTop: 50,
    // justifyContent: "center",
  },
  body: {
    backgroundColor: "#E7E9EB",
    width: "100%",
    height: "100%",
  },
});
