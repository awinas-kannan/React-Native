import './App.css';
import { Provider } from 'react-redux'
import CakeContainer from './components/CakeContainer';
import store from './redux/store';
import IceCreamContainer from './components/IceCreamContainer';

import HooksIceCreamContainer from './components/HooksIceCreamContainer';
import HooksCakeContainer from './components/HooksCakeContainer';



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
          <HooksCakeContainer/>
          <HooksIceCreamContainer />
        </>
      </div>
    </Provider>
  );
}

export default App;
