import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import Button from './components/button';
import List from './components/list';
import ErrorMessage from './components/errorMessage';
import { Provider } from 'react-redux'
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <Button/>
    <List/>
    <ErrorMessage/>
  </Provider>
);

(async function() {
    console.log("Gherkins Training!");  
})();