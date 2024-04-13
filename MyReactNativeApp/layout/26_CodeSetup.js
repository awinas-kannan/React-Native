import { StyleSheet, View } from "react-native";
import { Box } from "./Box";

export const LayoutCodeEvol = () => {
    return (
        <View style={styles.container}>
            <Box style={{ flex: 1, backgroundColor: "red" }} children={"Box 1"}></Box>
            <Box style={{ flex: 1, backgroundColor: "blue" }} children={"Box 2"}></Box>
            <Box style={{ flex: 1, backgroundColor: "green" }} children={"Box 3"}></Box>
            <Box style={{ flex: 1, backgroundColor: "indigo" }} children={"Box 4"}></Box>
            <Box style={{ flex: 1, backgroundColor: "lavender" }} children={"Box 6"}></Box>
            <Box style={{ backgroundColor: "pink" }} >Box 6</Box>
            <Box style={{ flex: 1, backgroundColor: "orange" }} >Box 7</Box>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        borderWidth: 10,
        borderRadius: 100,
        borderColor: 'gold'
    }
});

