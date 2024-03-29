import { View, Text, StyleSheet, Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
console.log('rendering ', {windowWidth}, {windowHeight})

export function DynamicUIDimensionAPI() {
    
    return (

        <View style={styles.container}>
            <View style={[styles.box, { alignItems: 'center', justifyContent: 'center' }]}>
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
        height: windowHeight > 600 ? "60%" : "90%" ,
        width: windowWidth > 500 ? "70%" : "90%",
        backgroundColor: 'white'
    }
})