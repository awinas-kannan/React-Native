import { React } from "react";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";

export const PlatformButton = ({ onPress, title }) => {
    return (
        <SafeAreaView style={styles.container} >
            <Pressable style={
                {
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'lightblue',
                    borderRadius: 20,
                    padding: 10
                }
            }>
                <Text style={styles.text}> {title} </Text>
            </Pressable>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: 'blue'
        },
        text: {
            color: 'black',
            fontSize: 25
        }
    }
)