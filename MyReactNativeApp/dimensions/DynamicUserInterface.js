import { View, Text, StyleSheet, Dimensions } from 'react-native'


export function DynamicUI() { 
    return (
        <View style={styles.container}>
            <View style={[styles.box, { alignItems: 'center', justifyContent: 'center' }]}>
                <Text style={{ fontSize: 20 }}> Hello World !</Text>
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
        height: 200,
        width: 200,
        backgroundColor: 'white'
    }
})