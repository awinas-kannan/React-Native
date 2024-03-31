import { NavigationContainer } from '@react-navigation/native';
import { StackNavigationDoc } from './screens/StackNavigationDoc';
import { StackNavigationCodeEv } from './screens/StackNavigationCodeEv';

export default function App() {

  return (
    <NavigationContainer>

      <StackNavigationCodeEv></StackNavigationCodeEv>
      {/* <StackNavigationDoc></StackNavigationDoc> */}

    </NavigationContainer>
  );
}