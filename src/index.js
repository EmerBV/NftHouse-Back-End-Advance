import React from 'react';
//import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


/* const container = document.getElementById('root')

const root = createRoot(container)

root.render(<App />) */
