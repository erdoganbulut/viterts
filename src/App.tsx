import React from 'react';
import { Link } from 'react-router-dom';
import Router from './routes';
import './styles/vendors.scss';

const App = () => (
  <div className="App">
    <main>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Router />
    </main>
  </div>
);

export default App;
