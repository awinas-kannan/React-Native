import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/About';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName= "Home">
        <Stack.Screen name='Home' component={HomeScreen}/> 
        <Stack.Screen name='About' component={AboutScreen}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}