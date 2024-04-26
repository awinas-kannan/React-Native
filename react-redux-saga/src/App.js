import logo from './logo.svg';
import './App.css';
import UserList from './components/userList';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <UserList></UserList>
      </Provider>
    </div>
  );
}

export default App;
