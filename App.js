import CategoriesScreen from "./src/screens/CategoriesScreen";
import {StatusBar, StyleSheet} from "react-native";
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="MealsCategories" component={CategoriesScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    </>
  );
}
