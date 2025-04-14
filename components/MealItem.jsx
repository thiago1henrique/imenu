import {View, Text, Pressable, Image, StyleSheet, Platform} from "react-native";
import { useNavigation } from "@react-navigation/native";

const MealItem = ({ id, title, imageUrl, duration, complexity, affordability }) => {
    const navigation = useNavigation();

    function selectMealItemHandler() {
        navigation.navigate('MealDetail', {
            mealId: id,
        })
    }

    return (
        <View style={mealItem}>
            <Pressable onPress={selectMealItemHandler} android_ripple={{ color: "#ccc"}} style={({ pressed }) => pressed ? buttonPressed : null }>
                <View>
                    <View>
                        <Image style={image} source={{ uri: imageUrl }}/>
                        <Text style={titleCard}>{title}</Text>
                    </View>
                    <View style={details}>
                        <Text style={detailItem}>{duration}m</Text>
                        <Text style={detailItem}>{complexity.toUpperCase()}</Text>
                        <Text style={detailItem}>{affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}

export default MealItem;

const { mealItem, image, titleCard, details, detailItem, buttonPressed } = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        backgroundColor: "white",
        elevation: 4,
        shadowColor: "#000",
        shadowOpacity: 0.35,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 8,
        overflow: Platform.OS === "ios" ? "visible" : "hidden"
    },
    innerContainer: {
        borderRadius: 8,
        overflow: "hidden",
    },
    image: {
        width: '100%',
        height: 200,
    },
    titleCard: {
        textAlign: 'center',
        fontSize: 18,
        padding: 8
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12
    },
    buttonPressed: {
        opacity: 0.5,
    },
})