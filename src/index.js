import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { firebaseContext } from './Components/firebase/firebasecontext';
import firebase from './Components/firebase/config';
import Context  from './Components/firebase/firebasecontext';
ReactDOM.render(
    <Context>
<firebaseContext.Provider value={{firebase}}>
    <App />
    </firebaseContext.Provider>
    </Context>

, document.getElementById('root'));
