import { SafeAreaView, StyleSheet, Platform } from "react-native";
import Homw from './src/views/Home';
import Home from './src/views/Home';
export default function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(7,26,93,255)",
    paddingTop: Platform.OS === "android" && 40,
  },
});
