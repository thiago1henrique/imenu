import { MEALS } from '../../data/dummy-data'
import {Text, View, StyleSheet} from "react-native";

const MealsOverviewScreen = () => {
    return (
        <>
            <View style={container}>
                <Text>Meals Overview Screen</Text>
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