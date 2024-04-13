import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native'

export function DynamicUIDimensionAPIUseState() {

    const [dimensions, setDimensions] = useState({
        window: Dimensions.get('window'),
    });

    // function DimensionOnChangeEvent() {
    //     console.log('DimensionOnChangeEvent called');
    //     const subscription = Dimensions.addEventListener('change', ({ window }) => setDimensions({ window }))
    //     return () => subscription?.remove();
    // }
    // useEffect(DimensionOnChangeEvent);

    //When will the code written in return will be called ?

    useEffect(() => {
        console.log('DimensionOnChangeEvent called');
        const subscription = Dimensions.addEventListener("change",
            ({ window }) => {
                setDimensions({ window }); 
            });
        return () => {
            console.log('Exiting current page')
            subscription?.remove()
        };
    });

    // const window  = dimensions;
    // const windowWidth = dimensions.window.width;
    // const windowHeight = dimensions.window.height;
    //OR
    const { window } = dimensions;
    const windowWidth = window.width;
    const windowHeight = window.height;

    console.log('DynamicUIDimensionAPIUseState rendering ', { windowWidth }, { windowHeight })

    return (
        <View style={styles.container}>
            <View style={[styles.box, {
                height: windowHeight > 600 ? "60%" : "90%",
                width: windowWidth > 500 ? "70%" : "90%",
                alignItems: 'center',
                justifyContent: 'center'
            }]}>
                <Text style={{ fontSize: windowWidth > 500 ? 50 : 24 }}> Hello World !</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50,
        backgroundColor: 'plum',
        alignItems: 'center', justifyContent: 'center'
    },
    box: {
        backgroundColor: 'white'
    }
})