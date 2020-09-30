import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import Header from './components/Header';


function App() {
  return (
    <div>
        <Header />


        <Route path="/login" component={LoginForm}></Route>
        <Route path="/register" component={SignUpForm}></Route>
    </div>
  );
}

export default App;
