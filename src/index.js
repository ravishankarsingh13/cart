import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyACTJFWSs1OhgniVXNvKWo46Q0Dmv9AXNU",
    authDomain: "cart-24a1a.firebaseapp.com",
    databaseURL: "https://cart-24a1a.firebaseio.com",
    projectId: "cart-24a1a",
    storageBucket: "cart-24a1a.appspot.com",
    messagingSenderId: "54832730573",
    appId: "1:54832730573:web:a2d08e03b4ed7e8ea0f484"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));
