import React from 'react';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import {store} from './store/index.js';

function App() {
  return (
    <div>
    <Dashboard store={store} />
    </div>
  );
}

export default App;
