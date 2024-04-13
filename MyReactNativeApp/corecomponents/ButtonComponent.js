import { Alert, Button, SafeAreaView, StyleSheet, Text, View } from "react-native";

const Separator = () => <View style={styles.separator} />;


export const ButtonRN = () => {

    const handleButtonPress = (buttonDetails) => {
        Alert.alert(
            'Button Pressed',
            `You pressed the ${buttonDetails} button.`,
            [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>
                    The title and onPress handler are required. It is recommended to set
                    accessibilityLabel to help make your app usable by everyone.
                </Text>
                <Button
                    title="Press me 0"
                    onPress={() => Alert.alert('Simple Button pressed')}
                    accessibilityLabel="Learn more about this purple button"
                />

                <Button
                    title="Press me 1"
                    onPress={ handleButtonPress('Press me 1')}
                />

            </View>
            <Separator />

            <View>
                <Text style={styles.title}>
                    The title and onPress handler are required. It is recommended to set
                    accessibilityLabel to help make your app usable by everyone.
                </Text>
                <Button
                    title="Press me 0"
                    onPress={() => Alert.alert('Simple Button pressed')}
                />

                <Button
                    title="Press me 1"
                    onPress={() => handleButtonPress('Press me 1')}
                />

            </View>

            <View style={styles.separator} />

            <View>
                <Text style={styles.title}>
                    Adjust the color in a way that looks standard on each platform. On iOS,
                    the color prop controls the color of the text. On Android, the color
                    adjusts the background color of the button.
                </Text>
                <Button
                    title="Press me"
                    color="#f194ff"
                    onPress={() => Alert.alert('Button with adjusted color pressed')}
                />
            </View>

            <Separator />

            <Separator />
            <View>
                <Text style={styles.title}>
                    All interaction for the component are disabled.
                </Text>
                <Button
                    title="Press me"
                    disabled
                    onPress={() => Alert.alert('Cannot press this one')}
                />
            </View>
            <Separator />

            <View>
                <Text style={styles.title}>
                    This layout strategy lets the title define the width of the button.
                </Text>
                <View style={styles.fixToText}>
                    <Button
                        title="Left button"
                        onPress={() => Alert.alert('Left button pressed')}
                    />
                    <Button
                        title="Right button"
                        onPress={() => Alert.alert('Right button pressed')}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
        bcolor :'plum'
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: 'red',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});