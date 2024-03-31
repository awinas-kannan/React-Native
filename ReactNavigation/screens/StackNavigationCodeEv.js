import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Alert, Pressable, Text } from 'react-native';
import HomeScreen from './HomeScreenCodeEv';
import AboutScreen from './AboutCodeEv';


//https://reactnavigation.org/docs/native-stack-navigator
export function StackNavigationCodeEv() {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{
            headerStyle: {
                backgroundColor: 'green'
            },
            headerTintColor: 'white',
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 14
            },
            headerRight: () => (
                <Pressable onPress={() => { Alert.alert('Menu Clicked') }}>
                    <Text style={{ fontSize: 16, color: 'white' }}> Menu </Text>
                </Pressable>
            ),
            contentStyle: {
                backgroundColor: "lightgreen"
            }

        }}>
            <Stack.Screen name='Home' component={HomeScreen}
                options={{
                    title: 'Welcome Home !!!',
                    // headerStyle: {
                    //   backgroundColor: 'green'
                    // },
                    // headerTintColor: 'white',
                    // headerTitleStyle: {
                    //   fontWeight: 'bold',
                    //   fontSize: 14
                    // },
                    // headerRight: () => (
                    //   <Pressable onPress={() => { Alert.alert('Menu Clicked') }}>
                    //     <Text style={{ fontSize: 16, color: 'white' }}> Menu </Text>
                    //   </Pressable>
                    // ),
                    // contentStyle: {
                    //   backgroundColor: "lightgreen"
                    // }
                }} />
            <Stack.Screen name='About' component={AboutScreen}
            // options={({ route }) => ({
            //   title: route.params.name + ' Using Options'
            // })} 
            />
        </Stack.Navigator>

    );
}
