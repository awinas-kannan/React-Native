import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, Platform, StatusBar } from 'react-native';

const PlatformSafeAreaViewComp = () => {
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
        backgroundColor: 'plum',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    container: {
        flex: 1,
        backgroundColor: 'ivory'
    },
    text: {
        fontSize: 25,
        fontWeight: '500',
        paddingTop: Platform.OS === 'android' ? 20 : 0
    },
});

export default PlatformSafeAreaViewComp;