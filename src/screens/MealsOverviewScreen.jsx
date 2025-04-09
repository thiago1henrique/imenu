import { MEALS, CATEGORIES } from '../../data/dummy-data'
import { FlatList, View, StyleSheet } from "react-native";
import MealItem from "../../components/MealItem";
import { useLayoutEffect } from "react";

const MealsOverviewScreen = ({ route, navigation }) => {

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;
        navigation.setOptions({
            title: categoryTitle,
        })
    }, [catId, navigation]);

    const catId = route.params.categoryId;

    const displayMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    })



    const renderMealItem = (itemData) => {
        const item = itemData.item;
        const mealItemProps = {
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration,
        }
        return <MealItem {...mealItemProps} />
    }

    return (
        <>
            <View style={container}>
                <FlatList data={displayMeals} keyExtractor={(item) => item.id} renderItem={renderMealItem} />
            </View>
        </>
    )
}

const { container } = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})

export default MealsOverviewScreen;