import { View, Text } from "react-native";

export const GreetArrowCompo = ({ name }) => {
    return (
        <View style={{ flex: 1, backgroundColor: "plum", paddingTop: 100 }}>
            <Text > Hey {name} in  GreetArrowCompo </Text>

        </View>
    );
}

export function GreetFuncComp({ name }) {
    return (
        <View style={{ flex: 1, backgroundColor: "plum", paddingTop: 100 }}>
            <Text > Hey {name} in GreetFuncComp </Text>

        </View>
    );
}