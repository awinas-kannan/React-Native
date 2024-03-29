import React from 'react';
import { View, StyleSheet, Text, useWindowDimensions } from 'react-native';

const UseWindowDimensions = () => {
    const { height, width, scale, fontScale } = useWindowDimensions();
    // const height = useWindowDimensions().height;
    // const width = useWindowDimensions().width;
    console.log({ height, width, scale, fontScale });
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Window Dimension Data</Text>
            <Text>Height: {height}</Text>
            <Text>Width: {width}</Text>
            <Text>Font scale: {fontScale}</Text>
            <Text>Pixel ratio: {scale}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgreen',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        fontSize: 20,
        marginBottom: 12
    },
});

export default UseWindowDimensions;