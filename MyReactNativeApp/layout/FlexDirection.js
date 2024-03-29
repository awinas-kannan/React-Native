import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const FlexDirectionBasics = () => {
    const [flexDirection, setflexDirection] = useState('column');

    return (
        <PreviewLayout
            label="flexDirection"
            values={['column', 'row', 'row-reverse', 'column-reverse']}
            selectedValue={flexDirection}
            setSelectedValue={setflexDirection}>
            <View style={[styles.box, { backgroundColor: 'powderblue' }]} ><Text style={{ textAlign: 'center' }}>1</Text></View>
            <View style={[styles.box, { backgroundColor: 'skyblue' }]} ><Text style={{ textAlign: 'center' }}>2</Text></View>
            <View style={[styles.box, { backgroundColor: 'steelblue' }]} ><Text style={{ textAlign: 'center' }}>3</Text></View>
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
    },
    box: {
        // flex :1 ,
        width: 100,
        height: 100,
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
        textAlign: 'center',
    },
    selected: {
        backgroundColor: 'lightgreen',
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
