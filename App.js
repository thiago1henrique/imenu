import CategoriesScreen from "./src/screens/CategoriesScreen";
import {StatusBar, StyleSheet} from "react-native";

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <CategoriesScreen />
    </>
  );
}
