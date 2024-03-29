import { View, Text, StyleSheet } from "react-native";

export function BoxShadowRN() {

    return (
        <View style={styles.container}>

            <View style={[styles.lightGreenBox, styles.box, styles.boxShadowIOS]}>
                <Text> Light Green Box</Text>
            </View>

            <View style={[styles.lightBlueBox, styles.box, styles.boxShadowAndroid]}>
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
        box: {
            height: "45%",
            width: "100%",
            paddingVertical: 100,
            paddingHorizontal: 50,
            margin: 10,
            // borderWidth: 10,
            // borderStyle: "solid",
            // borderColor: 'lightskyblue'
        },
        boxShadowIOS: {
            shadowColor: "#333333",
            shadowOffset: {
                width: 6,
                height: 6
            },
            shadowOpacity: 0.5,
            shadowRadius: 4
        },
        boxShadowAndroid: {
            shadowColor: 'black',
            elevation: 5
        },
        lightGreenBox: {
            backgroundColor: 'lightgreen',
            borderStyle: "solid",
        },
        lightBlueBox: {
            backgroundColor: 'lightblue'
        }

    }
)