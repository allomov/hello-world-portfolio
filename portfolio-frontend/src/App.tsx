import React from 'react';
import { createBrowserHistory } from 'history';
import { Button } from 'antd';
import AppRoutes from './core/routes';
import './App.css';

const history = createBrowserHistory({});

function App() {
  return (
    <AppRoutes history={history} />
  );
}

export default App;
