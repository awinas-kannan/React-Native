
import React from 'react';
import { StyleSheet, View } from 'react-native';

export const Flex = () => {
    return (
        <View
            style={[
                styles.container,
                {
                    // Try setting `flexDirection` to `"row"`.
                    flexDirection: 'row',
                },
            ]}>
            <View style={{ flex: 1, backgroundColor: 'firebrick' }} />
            <View style={{ flex: 2, backgroundColor: 'honeydew' }} />
            <View style={{ flex: 3, backgroundColor: 'indigo' }} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50,
    },
});