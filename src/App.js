import React from 'react';
import './App.css';
// import Dashboard from './components/dashboard/Dashboard';
import ConnectedDashboard from './components/dashboard/Dashboard';
import Group from './components/group/Group';
import { store } from './store/index.js';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import { history } from './store/history';
import ConnectedNav from './components/navigator/Nav';


function App() {
  return (
    <div>
      <Router history={history}>
        <Provider store={store}>
          <ConnectedNav />
          {/* <Dashboard store={store} /> */}
          {/* <Dashboard /> */}
          <Route exact path="/" render={() => (<h3>Home</h3>)} />
          <Route exact path="/groups" render={() => (<ConnectedDashboard />)} />
          {/* <Route exact path="/groups" render={() => (<Group />)} /> */}
        </Provider>
      </Router>
    </div>
  );
}

export default App;
