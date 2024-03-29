import { View, Text, StyleSheet } from 'react-native'

export const Box = ({ children, style }) => {
    return (
        <View style={[styles.box, style]}>
            <Text style={styles.text}> {children} </Text>
        </View>
    );

}

const styles = StyleSheet.create({
    box: {
        backgroundColor: "plum"
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: "white"
    }
});