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
            <Stack.Navigator initialRouteName="Meals Categories">
                <Stack.Screen name="Meals Categories"
                              component={CategoriesScreen}
                              options={{
                                  title: "Cardápio",
                                  headerTitleAlign: "center",
                                  headerTitleStyle: {
                                      fontFamily: "ampleSoftPro-bold",
                                  }
                              }}/>

                <Stack.Screen name="Meals Overview"
                              component={MealsOverviewScreen}
                              options={{
                                  title: "Descrição",
                                  headerTitleAlign: "center",
                                  headerTitleStyle: {
                                      fontFamily: "ampleSoftPro-bold",
                                  }
                              }}/>
            </Stack.Navigator>
        </NavigationContainer>
    </>
  );
}
