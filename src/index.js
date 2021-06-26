// Entry point

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'antd/dist/antd.dark.css'; // or 'antd/dist/antd.less'
import './index.css';

// Import firebase stuff
import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage'
import 'firebase/app-check';

const firebaseConfig = {
    apiKey: 'AIzaSyDkJIx8hbU_5-8aPBzfsKi1vHwQliKG5hg',
    authDomain: 'ne-edu.firebaseapp.com',
    projectId: 'ne-edu',
    storageBucket: 'ne-edu.appspot.com',
    messagingSenderId: '296273538078',
    appId: '1:296273538078:web:dda01455949345d57b520f',
    measurementId: 'G-0XJHB0Z6JV'
};

firebase.initializeApp(firebaseConfig);

firebase.appCheck().activate('6LedN1kbAAAAAFFSX5v4tpkG2xY0lVRSkm9fP90f');

ReactDOM.render(<App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
