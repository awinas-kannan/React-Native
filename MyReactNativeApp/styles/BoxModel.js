import { View, Text, StyleSheet } from "react-native";

export function BoxModelRN() {

    return (
        <View style={styles.container}>

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
            borderWidth :5,
            borderColor : 'red'
        },
        box: {
            height: "50%",
            width: "100%",
            // padding: 50,
            // paddingTop: 100,
            paddingVertical : 100,
            paddingHorizontal : 50,
            margin : 10,
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