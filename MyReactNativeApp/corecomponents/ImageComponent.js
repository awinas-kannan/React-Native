import React from 'react';
import { Image, Text, View } from 'react-native';

const logImg = require("../assets/adaptive-icon.png")

export function ImageCompRN () {
    return (
        <View style={{ flex: 1, backgroundColor: "plum" }}>
           <Image source={logImg} style={{width :300, height:300}}></Image>
           <Image source={{ uri : 'https://picsum.photos/200'} } style={{width :200, height:200}}></Image>
        </View>
    );
};

