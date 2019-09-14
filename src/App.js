import React from 'react';
import './App.css';
// import Dashboard from './components/dashboard/Dashboard';
import ConnectedDashboard from './components/dashboard/Dashboard';
import { store } from './store/index.js';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import { history } from './store/history';


function App() {
  return (
    <div>
      <Router history={history}>
      <Provider store={store}>
        {/* <Dashboard store={store} /> */}
        {/* <Dashboard /> */}
        <ConnectedDashboard />
        <ConnectedDashboard />
      </Provider>
      </Router>
    </div>
  );
}

export default App;
