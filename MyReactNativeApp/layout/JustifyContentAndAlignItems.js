//

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const JustifyContentAndAlignItems = () => {
    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <Text>Item 1</Text>
            </View>
            <View style={styles.item}>
                <Text>Item 2</Text>
            </View>
            <View style={styles.item}>
                <Text>Item 3</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row', // Main axis is horizontal (left to right)
        justifyContent: 'space-between', // Align items along the main axis
        alignItems: 'center', // Align items along the cross axis
    },
    item: {
        flex: 1,
        backgroundColor: 'lightblue',
        padding: 10,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default JustifyContentAndAlignItems;
