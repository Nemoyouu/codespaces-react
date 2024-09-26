import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import MouseEvent from './MouseEvent';
//import ItemList from './ItemList'; 
import Bmi from './Bmi';
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Bmi/>
  </React.StrictMode>
);