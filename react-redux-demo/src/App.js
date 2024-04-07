import './App.css';
import { Provider } from 'react-redux'
import CakeContainer from './components/CakeContainer';
import store from './redux/store';
import IceCreamContainer from './components/IceCreamContainer';

import HooksIceCreamContainer from './components/HooksIceCreamContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import ItemContainer from './components/ItemContainer';



function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <>
          <CakeContainer></CakeContainer>
          <IceCreamContainer></IceCreamContainer>
        </>
        <h1>--------------------------- Hooks Containers ---------------------------</h1>
        <>
          <HooksCakeContainer />
          <HooksIceCreamContainer />
        </>

        <h1>--------------------------- OWN Props ---------------------------</h1>
        <ItemContainer cake></ItemContainer>
        <ItemContainer ice></ItemContainer>
      </div>
    </Provider>
  );
}

export default App;
