import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Users from './Users'
//fare un import senza alias, è come se stessi dicendo
// lancia questo javascript qui dentro
import './services/axios'
// import App from './ProductKindsFilter';
import Chronometer from './Chronometer';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Users />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
