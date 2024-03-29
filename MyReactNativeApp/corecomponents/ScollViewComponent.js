import React from 'react';
import { Image, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';

const logImg = require("../assets/adaptive-icon.png")

export const ScrollViewRN = () => {
    return (
        <View style={styles.container}>
            <ScrollView style={{ backgroundColor: "plum" }}>
                <ImageBackground source={logImg} style={{ flex: 1 }}>
                    <Image source={{ uri: 'https://picsum.photos/200' }} style={{ width: 500, height: 500 }}></Image>
                    <Text style={styles.text}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Text>
                    <Image source={{ uri: 'https://picsum.photos/200' }} style={{ width: 500, height: 500 }}></Image>
                </ImageBackground>
            </ScrollView>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
    },
    text: {
        fontSize: 40,
    },
});