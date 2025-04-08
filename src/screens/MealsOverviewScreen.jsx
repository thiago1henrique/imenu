import { MEALS } from "../../data/dummy-data";
import { FlatList, View, StyleSheet } from "react-native";

const MealsOverviewScreen = ({ route }) => {
    const catId = route.params.categoryId;
    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    const renderMealItem = (itemData) => {
        return (
            <View>

            </View>
        )
    }

    return (
        <View style={container}>
            <FlatList data={displayedMeals} keyExtractor={(item) => item.id} renderItem={renderMealItem}/>
        </View>
    )
}

export default MealsOverviewScreen

const { container } = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})