import './App.css';
import { Provider } from 'react-redux'
import CakeContainer from './components/CakeContainer';
import store from './redux/store';
import IceCreamContainer from './components/IceCreamContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <>
          <CakeContainer></CakeContainer>
          <IceCreamContainer></IceCreamContainer>
        </>
      </div>
    </Provider>
  );
}

export default App;
