import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    StatusBar,
    ScrollView,
} from "react-native";
import pokemonList from "./data.json";

export default function RenderListUsingScrollViewAndMap() {
    return (
        <SafeAreaView styles={styles.container}>
            <ScrollView style={styles.scrollView}>
                {pokemonList.map((pokemon) => {
                    // console.log(pokemon.id);
                    return (
                        <View style={styles.card} key={pokemon.id}>
                            <Text style={styles.cardText}>{pokemon.type}</Text>
                            <Text style={styles.cardText}>{pokemon.name}</Text>
                        </View>
                    );
                })}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "plum",
        paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
        paddingHorizontal: 16,
        paddingTop: StatusBar.currentHeight,
    },
    card: {
        backgroundColor: "#FFFFFF",
        padding: 16, // Spacing Within the card
        borderRadius: 8,
        marginBottom: 16, // Spacing B/w the cards
        borderWidth: 2,
    },
    cardText: {
        fontSize: 30,
    }
});