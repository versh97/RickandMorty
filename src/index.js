import React from 'react';
//import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import * as ReactDOMClient from 'react-dom/client'; 
import {Provider} from 'react-redux';
import store from './Redux/store';

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
     <BrowserRouter>
       <App />
     </BrowserRouter>
  </Provider>
);