import {Pressable, Text, View, StyleSheet, Platform} from "react-native";

const CategoryGridTile = ({ title, color, onPress }) => {
    return (
        <View style={gridItem}>
            <Pressable android_ripple={{color: "#ccc"}}
                       style={({ pressed }) =>
                           [button, pressed ? buttonPressed : null ]}
                       onPress={onPress}>
                <View style={[innerContainer, {backgroundColor: color}]}>
                    <Text style={titleCard}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}

const {
    gridItem,
    button,
    innerContainer,
    titleCard,
    buttonPressed
} = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 8,
        overflow: Platform.OS === "ios" ? "visible" : "hidden"
    },

    button: {
        flex: 1,
    },

    buttonPressed: {
        opacity: 0.5,
    },

    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8
    },

    titleCard: {
        fontFamily: "ampleSoftPro-bold",
        fontSize: 18,
    }
})

export default CategoryGridTile;