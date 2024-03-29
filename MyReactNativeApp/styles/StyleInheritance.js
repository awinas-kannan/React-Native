import { View, Text, StyleSheet } from "react-native";

export function StyleInheritance() {
    return (
        <View style={styles.container}>
            <View style={styles.darkMode}>
                <Text style={styles.darkModeText}>
                    Style Inheritance (Level 1) {'\n'}
                    <Text style={styles.boldText}> Level 2 Text</Text>
                </Text>
            </View>
            <View style={[styles.lightGreenBox, styles.box]}>
                <Text> Light Green Box</Text>
            </View>

            <View style={[styles.lightBlueBox, styles.box]}>
                <Text> Light Blue Box</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: 'plum',
            paddingLeft: 50,
            paddingTop: 50,
            paddingBottom: 50,
            paddingRight: 50,
            borderWidth: 5,
            borderColor: 'red'
        },
        darkMode: {
            backgroundColor: 'black'
        },
        darkModeText: {
            color: "blue"
        },
        boldText: {
            fontWeight: "bold"
        },
        box: {
            height: "50%",
            width: "100%",
            paddingVertical: 100,
            paddingHorizontal: 50,
            margin: 10,
            borderWidth: 10,
            borderStyle: "solid",
            borderColor: 'lightskyblue'
        },
        lightGreenBox: {
            backgroundColor: 'lightgreen',
            borderStyle: "solid",

        },
        lightBlueBox: {
            backgroundColor: 'lightblue',

        }

    }
)