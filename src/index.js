import React from 'react';
import ReactDOM from 'react-dom';
// import AppClass from './AppClass';
// import AppFunction from './AppFunction';
// import Login from './Login';
import Register from './Register';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <AppClass /> */}
    {/* <AppFunction /> */}

    {/* <Login /> */}
    <Register />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
