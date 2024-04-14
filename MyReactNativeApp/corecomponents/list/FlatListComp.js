import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    StatusBar,
    FlatList,
    SafeAreaViewBase,
} from "react-native";
import pokemonList from "./data.json";

export function FlatListComp() {

    return (
        <SafeAreaView style={styles.container}>
                <FlatList
                    data={pokemonList}
                    // data={[]}
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
                                height: 20,
                            }}
                        />
                    }
                    ListEmptyComponent={<Text>No Items Found</Text>}
                    ListHeaderComponent={
                        <Text style={styles.headerText}>Pokemon List</Text>
                    }
                    ListFooterComponent={
                        <Text style={styles.footerText}>End of list</Text>
                    }
                />
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
        backgroundColor: "lightgreen",
        padding: 16, // Spacing Within the card
        borderRadius: 8,
        // marginBottom: 16, // Spacing B/w the cards
        borderWidth: 2,
        marginHorizontal: 10
    },
    cardText: {
        fontSize: 30,
    },
    headerText: {
        fontSize: 24,
        textAlign: "center",
        marginBottom: 12,
    },
    footerText: {
        fontSize: 24,
        textAlign: "center",
        marginTop: 12,
    },
    sectionHeaderText: {
        backgroundColor: "#FFFFFF",
        fontSize: 24,
        fontWeight: "bold",
    },
});