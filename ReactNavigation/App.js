import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/About';
import { MyStackFromDoc } from './screens/StackNavigationDoc';
import { Alert, Pressable, Text } from 'react-native';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>

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
          options={({ route }) => ({
            title: route.params.name
          })} />
      </Stack.Navigator>

      {/* <MyStackFromDoc></MyStackFromDoc> */}


    </NavigationContainer>
  );
}