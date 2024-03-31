import { NavigationContainer } from '@react-navigation/native';
import { StackNavigationDoc } from './screens/StackNavigationDoc';
import { StackNavigationCodeEv } from './screens/StackNavigationCodeEv';
import { DrawerNavigationCodeEv } from './screens/DrawerNavigationCodeEv';

export default function App() {

  return (
    <NavigationContainer>

      {/* <StackNavigationCodeEv></StackNavigationCodeEv> */}
      {/* <StackNavigationDoc></StackNavigationDoc> */}
      
      <DrawerNavigationCodeEv/>
      
    </NavigationContainer>
  );
}