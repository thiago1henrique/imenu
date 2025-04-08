import {Image, Text, View} from "react-native";
import { MEALS } from "../../data/dummy-data";

const MealDetailScreen = ({ route }) => {
    const mealId = route.params.mealId;
    const selectMeal = MEALS.find(meal => meal.id === mealId);
    return (
        <View>
            <Image source={{uri: selectMeal.imageUrl}}/>
            <Text>{selectMeal.title}</Text>
            <View>

            </View>
            <Text>Ingredients</Text>

            <Text>Steps</Text>

        </View>
    )
}

export default MealDetailScreen;