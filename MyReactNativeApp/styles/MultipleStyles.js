import { View, Text, StyleSheet } from "react-native";

export function MultipleStyles() {
    return (
        <View style={styles.container}>

            <View style={[styles.lightGreenBox,styles.box]}>
                <Text> Light Green Box</Text>
            </View>

            <View style={[styles.lightBlueBox,styles.box]}>
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
            padding: 60
        },
        box :{
            height: 100,
            width: 100,
            padding: 10,
            borderWidth : 5,
            borderStyle: "solid",
            borderColor : 'lightskyblue'
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