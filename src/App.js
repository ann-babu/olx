import React, { useContext, useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router,Route } from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import { AuthContext, firebaseContext } from './Components/firebase/firebasecontext'
import Create from './Pages/Create'
import viewPost from'./Pages/ViewPost'

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import View from './Pages/ViewPost';


function App() {
  const{setUser}=useContext(AuthContext) 
  const{firebase}=useContext(firebaseContext) 
  useEffect(()=>{
firebase.auth().onAuthStateChanged((user)=>{  
   setUser(user)
  })
  })
  return (
    <div>
      <Router>
        <Route exact path='/'>
      <Home />
      </Route>
   
        <Route path='/signup'>
      <Signup/>
      </Route>
 
  
        <Route path='/login'>
      <Login/>
      </Route>
   
   
   <Route path='/create'>
      <Create/>
      </Route>

      <Route path='/view'>
      <View/>
      </Route>
   </Router> 
   </div>
  );
}

export default App;
