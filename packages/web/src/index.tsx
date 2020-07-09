import React from 'react';
import ReactDOM from 'react-dom';
import App from '@app/components';

ReactDOM.hydrate(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
