import {Image, Pressable, Text, View, StyleSheet, Platform} from "react-native";
import { useNavigation } from "@react-navigation/native";

const MealItem = ({ id, title, imageUrl, duration, complexity, affordability }) => {
    const navigation = useNavigation();

    const selectMealItem = () => {
        navigation.navigate('Meals Details', {
            mealId: id
        });
    }

    return (
        <View style={mealItem}>
            <Pressable android_ripple={{color: '#ccc'}} onPress={selectMealItem}>
                <View style={innerContainer}>
                    <View>
                        <Image style={image} source={{uri: imageUrl}}/>
                        <Text style={titleCustom}>{title}</Text>
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





const { image, titleCustom, mealItem, details, detailItem, innerContainer} = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        backgroundColor: "#fff",
        elevation: 4,
        shadowColor: "#000",
        shadowOpacity: 0.35,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 16,
        overflow: Platform.OS === "ios" ? "visible" : "hidden"
    },

    innerContainer: {
        borderRadius: 8,
        overflow: "hidden",
    },

    image: {
        width: "100%",
        height: 200,
    },

    titleCustom: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        padding: 8
    },

    details: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 8,
    },

    detailItem: {
        marginHorizontal: 4,
        fontSize: 12
    },

    buttonPressed: {
        opacity: 0.5,
    },
})

export default MealItem;