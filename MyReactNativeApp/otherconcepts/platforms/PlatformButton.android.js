import { React } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export const PlatformButton = ({onPress, title}) => (

    <View style={styles.container} >
        <Pressable onPress={onPress} style={
            {
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'lightgreen',
                borderRadius: 25,
                padding: 10
            }
        }>
            <Text style={styles.text} >  Platform Button  </Text> 
        </Pressable>
    </View>
)

const styles = StyleSheet.create(
    {
        container : {
            flex: 1,
            backgroundColor: 'blue',
            paddingTop : 40
        },
        text: {
            color: 'black',
            fontSize: 25
        }
    }
)