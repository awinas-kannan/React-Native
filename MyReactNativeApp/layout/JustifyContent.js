import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export const JustifyContentBasics = () => {
    const [justifyContent, setJustifyContent] = useState('flex-start');

    return (
        <PreviewLayout
            label="justifyContent"
            selectedValue={justifyContent}
            values={[
                'flex-start',
                'flex-end',
                'center',
                'space-between',
                'space-around',
                'space-evenly',
            ]}
            setSelectedValue={setJustifyContent}>
            <View style={[styles.box, { backgroundColor: 'powderblue' }]} ><Text style={{ textAlign: 'center', marginTop: 20, fontSize: 25 }}>1</Text></View>
            <View style={[styles.box, { backgroundColor: 'skyblue' }]} ><Text style={{ textAlign: 'center', marginTop: 20, fontSize: 25 }}>2</Text></View>
            <View style={[styles.box, { backgroundColor: 'steelblue' }]} ><Text style={{ textAlign: 'center', marginTop: 20, fontSize: 25 }}>3</Text></View>
            <View style={[styles.box, { backgroundColor: 'firebrick' }]} ><Text style={{ textAlign: 'center' }}>4</Text></View>
            <View style={[styles.box, { backgroundColor: 'grey' }]} ><Text style={{ textAlign: 'center' }}>5</Text></View>
        </PreviewLayout>
    );
};

const PreviewLayout = ({
    label,
    children,
    values,
    selectedValue,
    setSelectedValue,
}) => (
    <View style={{ padding: 50, flex: 1 }}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.row}>
            {values.map(value => (
                <TouchableOpacity
                    key={value}
                    onPress={() => setSelectedValue(value)}
                    style={[styles.button, selectedValue === value && styles.selected]}>
                    <Text
                        style={[
                            styles.buttonLabel,
                            selectedValue === value && styles.selectedLabel,
                        ]}>
                        {value}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
        <View style={[styles.container, { [label]: selectedValue }]}>{children}</View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 8,
        backgroundColor: 'aliceblue',
        // flexDirection: 'row'
    },
    box: {
        width: 100,
        height: 100,
        borderColor : 'coral',
        borderWidth: 2
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    button: {
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 4,
        backgroundColor: 'oldlace',
        alignSelf: 'flex-start',
        marginHorizontal: '1%',
        marginBottom: 6,
        minWidth: '48%',
        textAlign: 'center'
    },
    selected: {
        backgroundColor: 'coral',
        borderWidth: 0,
    },
    buttonLabel: {
        fontSize: 12,
        fontWeight: '500',
        color: 'coral',
    },
    selectedLabel: {
        color: 'white',
    },
    label: {
        textAlign: 'center',
        marginBottom: 10,
        fontSize: 24,
    },
});