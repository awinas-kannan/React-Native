import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    StatusBar,
    FlatList,
} from "react-native";
import pokemonList from "./data.json";

export function FlatListComp() {

    return (
        <SafeAreaView styles={styles.container}>
            <View styles={styles.hPadd}>
                <FlatList
                    data={pokemonList}
                    renderItem={({ item }) => {
                        console.log(item.id);
                        return (
                            <View style={styles.card}>
                                <Text style={styles.cardText}>{item.type}</Text>
                                <Text style={styles.cardText}>{item.name}</Text>
                            </View>
                        );
                    }}
                    keyExtractor={(item) => item.id.toString()}
                    ItemSeparatorComponent={
                        <View
                            style={{
                                height: 16,
                            }}
                        />
                    }
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "plum",
        paddingTop: StatusBar.currentHeight,
    },
    hPadd: {
        flex: 1,
        backgroundColor: "black",
        paddingTop: StatusBar.currentHeight,
        marginVertical: 25,
        padding: 100
    },
    card: {
        backgroundColor: "plum",
        padding: 16, // Spacing Within the card
        borderRadius: 8,
        marginBottom: 16, // Spacing B/w the cards
        borderWidth: 2,
        marginHorizontal: 10
    },
    cardText: {
        fontSize: 30,
    }
});