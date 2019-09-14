import React from 'react';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import { store } from './store/index.js';
import { Provider } from 'react-redux';


function App() {
  return (
    <div>
      <Provider store={store}>
        {/* <Dashboard store={store} /> */}
        <Dashboard store={store} />
      </Provider>
    </div>
  );
}

export default App;
