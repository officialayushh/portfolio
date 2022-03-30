// Here we can import any file.
import React from 'react';
import ReactDOM from 'react-dom';  // Here first We import react-dom to define virtual dom of react here we use it.
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
