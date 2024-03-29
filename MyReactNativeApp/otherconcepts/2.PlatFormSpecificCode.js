import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, Platform } from 'react-native';

const PlatformSafeAreaViewComp_2 = () => {
    return (
        <SafeAreaView style={styles.safeContainer}>
            <View style={styles.container}>
                <Text style={styles.text}>Page content</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: 'plum'
    },
    container: {
        flex: 1,
        backgroundColor: 'ivory'
    },
    text: {
        textAlign : 'center',
        
        ...Platform.select({
            ios: {
                color: 'blue',
                fontSize: 25,
                fontStyle: 'italic'
            },
            android: {
                color: 'red',
                fontSize: 30,
                // fontStyle: 'bold'
                paddingTop: 20
            },
            default: {
                // other platforms, web for example
                backgroundColor: 'blue',
            },
        }),

    },
});

export default PlatformSafeAreaViewComp_2;