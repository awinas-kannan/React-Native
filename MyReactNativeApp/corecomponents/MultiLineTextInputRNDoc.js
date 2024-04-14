import React from 'react';
import { View, TextInput, StatusBar } from 'react-native';

const MultiLineTextInputRNDoc = () => {
    const [value, onChangeText] = React.useState('');

    // If you type something in the text box that is a color, the background will change to that
    // color.
    return (
        <View style={{
            flex: 1,
            paddingTop: StatusBar.currentHeight,
            backgroundColor: 'plum',
        }}>
            <View
                style={{
                    backgroundColor: value === '' ? 'grey' : value,
                    borderBottomColor: 'blue',
                    borderBottomWidth: 10,
                }}>
                <TextInput
                    editable
                    multiline
                    // numberOfLines={10}
                    maxLength={400}
                    onChangeText={text => onChangeText(text)}
                    // onChangeText={onChangeText}
                    value={value}
                    style={
                        {
                            padding: 10,
                            minHeight: 100,
                            textAlignVertical: 'top'
                        }}

                />
            </View>
        </View>
    );
};

export default MultiLineTextInputRNDoc;