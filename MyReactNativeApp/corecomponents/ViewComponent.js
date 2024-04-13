import React from 'react';
import { Text, View } from 'react-native';

export function ViewCompRN () {
    return (
        <View style={{ flex: 1, backgroundColor: "plum" }}>
            <View style={{ width: '225', backgroundColor: 'blue', flex: .5 }} />
            <View style={{ backgroundColor: 'red', flex: .5 }} />
            <Text style={{ flex: .1 }}>Hey Awi</Text>
        </View>
    );
};

