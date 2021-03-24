import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DivarProvider from './context/DivarProvider';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <DivarProvider>
      <App />
    </DivarProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
