import React from 'react';
import { Image, ImageBackground, View } from 'react-native';

const logImg = require("../assets/adaptive-icon.png")

export function ImageBGCompRN() {
    return (
        <View style={{ flex: 1, backgroundColor: "plum" }}>
            <ImageBackground source={logImg} style={{ flex: 1 ,alignSelf:'center' }}>
                <Image source={{ uri: 'https://picsum.photos/200' }} style={{ width: 300, height: 300}}></Image>
            </ImageBackground>
        </View>
    );
};

