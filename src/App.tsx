import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.sass';
import { Provider } from 'react-redux';
import { Loading } from './components/templates/Loading';
import store from './redux/store';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Loading />
        <Home />
      </Provider>
    </div>
  );
}

export default App;
