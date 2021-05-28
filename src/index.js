import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from "react-redux"
import store from "./redux/store"
import { persistor } from "./redux/store"

import { BrowserRouter } from 'react-router-dom';
import App from './App';
import "./index.css"

import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

