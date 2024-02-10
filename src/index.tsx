import React from 'react';
import ReactDOM from 'react-dom';
import { StoreProvider } from 'easy-peasy';
import App from './App';
import { moviesStore } from './data/stores/movies-store';

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={moviesStore}>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);