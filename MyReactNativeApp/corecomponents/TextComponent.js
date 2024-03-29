import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function TextCompRN() {
    const [titleText, setTitleText] = useState("Bird's Nest");
    const bodyText = 'This is not really a bird nest.';

    const onPressTitle = () => {
        setTitleText("Bird's Nest [pressed]");
    };

    return (
        <View style={{ flex: 1, backgroundColor: "plum" }}>
            <Text style={{ flex: .1, paddingLeft: 100, paddingTop: 50, backgroundColor: "lightgreen" }}> Hey Awi :) </Text>
            <Text onPress={onPressTitle} style={{ flex: .1, paddingLeft: 100, paddingTop: 50, backgroundColor: "lightyellow" }}>
                <Text style={{ color: 'red' }} > {titleText} </Text > !!!
            </Text>
            <Text style={styles.three}> {bodyText} </Text>
        </View>
    );
};


const styles = StyleSheet.create({
    three: {
        flex: .1, paddingLeft: 100, paddingTop: 50, backgroundColor: "lightblue"
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
