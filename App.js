import CategoriesScreen from "./src/screens/CategoriesScreen";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { useFonts } from "expo-font"
import AppLoading from "expo-app-loading";
import MealsOverviewScreen from "./src/screens/MealsOverviewScreen";

const Stack = createNativeStackNavigator();

export default function App() {

    const [fontsLoaded] = useFonts({
        'ampleSoftPro-regular': require('./assets/fonts/AmpleSoftPro-Regular.ttf'),
        'ampleSoftPro-bold': require('./assets/fonts/AmpleSoftPro-Bold.ttf'),
    });

    if (!fontsLoaded) <AppLoading />

  return (
    <>
      <StatusBar barStyle="light-content" />
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerTitleAlign: "center",
                headerTitleStyle: {
                    fontFamily: "ampleSoftPro-bold",
                },
                headerStyle: {
                    backgroundColor: "#351401"
                },
                contentStyle: {
                    backgroundColor: "#3f2f25",
                },
                headerTintColor: "white",
            }} initialRouteName="Meals Categories">
                <Stack.Screen name="Meals Categories" component={CategoriesScreen}/>
                <Stack.Screen name="Meals Overview" component={MealsOverviewScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    </>
  );
}
