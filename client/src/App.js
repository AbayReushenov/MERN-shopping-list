/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-filename-extension */
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css/';
import { Provider } from 'react-redux';
import AppNavBar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavBar />
        <ShoppingList />
      </div>
    </Provider>
  );
}

export default App;
