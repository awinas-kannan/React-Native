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
            <Text style={[{ flex: .1, paddingLeft: 100, paddingTop: 50, backgroundColor: "lightgreen" }, styles.titleText]}> Hey Awi :) </Text>
            <Text onPress={onPressTitle} style={{ flex: .1, paddingLeft: 100, paddingTop: 50, backgroundColor: "lightyellow" }}>
                <Text style={{ color: 'red' }} > {titleText} </Text > !!!
            </Text>
            <Text style={styles.three}> {bodyText} </Text>



            {/* // Text container: the text will be inline if the space allowed it
                // |First part and second part|

                // otherwise, the text will flow as if it was one
                // |First part |
                // |and second |
                // |part       | */}
            <Text>
                <Text>First part and </Text>
                <Text>second part</Text>
            </Text>

            {
            /* View container: each text is its own block
                |First part and|
                |second part   |
                otherwise, the text will flow in its own block
                |First part |
                |and        |
                |second part| 
                */
            }
            <View>
                <Text>First part and </Text>
                <Text>second part</Text>
            </View>

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
        color: 'ivory'
    },
});
