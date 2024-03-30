import React, { useState } from 'react';
import { View, Switch, StyleSheet } from 'react-native';

const SwitchComponentDoc = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    // const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const toggleSwitch = () => {
        console.log({ isEnabled })
        // setIsEnabled(previousState => !previousState);
        setIsEnabled(!isEnabled);
    };


    return (
        
        <View style={styles.container}>
            <Switch
                trackColor={{ false: 'red', true: 'blue' }}
                thumbColor={isEnabled ? 'white' : 'black'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default SwitchComponentDoc;