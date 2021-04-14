import React, { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css/';
import { Provider } from 'react-redux';
import { Container } from 'reactstrap';
import AppNavBar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/itemModal';
import { loadUser } from './actions/authActions';

import store from './store';

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavBar />
        <Container>
          <ItemModal />
          <ShoppingList />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
