import React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput } from 'react-native';

const TextInputCompInRNDoc = () => {
    const [text, onChangeText] = React.useState('Useless Text');
    const [number, onChangeNumber] = React.useState('');

    const [email, onChangeEmail] = React.useState('awinas@gmail.com');
    return (
        <SafeAreaView style={{ paddingTop: 25 }}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                autoCorrect
                autoCapitalize='words'
                keyboardType='default'
            />
            <Text style={styles.input}>{text}</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="useless placeholder"
                keyboardType="numeric"
                secureTextEntry
            />

            <TextInput
                style={styles.input}
                value={email}
                onChangeText={onChangeEmail}
                placeholder="Email Address"
                keyboardType="email-address"
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default TextInputCompInRNDoc;