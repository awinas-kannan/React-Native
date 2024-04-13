import React, { useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';

export const PressableRN = () => {

    const [timesPressed, setTimesPressed] = useState(0);

    let textLog = '';
    if (timesPressed > 1) {
        textLog = timesPressed + 'x onPress';
    } else if (timesPressed > 0) {
        textLog = 'onPress';
    }

    const handleButtonPress = () => {
        setTimesPressed(current => current+ 1)
    };

    return (
      
        <View style={styles.container}>
           {console.log('rendering')}
            <Pressable
                // onPress={() => {
                //     setTimesPressed(current => current + 1);
                // }}
                onPress={() => handleButtonPress()}

                style={({ pressed }) => [
                    {
                        backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'lightgreen',
                    },
                    styles.wrapperCustom,
                ]}>
                    
                {({ pressed }) => (
                    <Text style={styles.text}>{pressed ? 'Pressed!' : 'Press Me'}</Text>
                )}
            </Pressable>
            <View style={styles.logBox}>
                <Text testID="pressable_press_console">{textLog}</Text>
            </View>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
    },
    wrapperCustom: {
        borderRadius: 8,
        padding: 16,
    },
    logBox: {
        padding: 20,
        margin: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#f0f0f0',
        backgroundColor: '#f9f9f9',
    },
});