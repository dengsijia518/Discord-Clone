import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import LoginPage from './authPages/LoginPage/LoginPage.js';
import RegisterPage from './authPages/RegisterPage/RegisterPage.js';
import Dashboard from './Dashboard/Dashboard.js';
import AlertNotification from './shared/components/AlertNotification';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/login' element={<LoginPage />} />
          <Route exact path='/register' element={<RegisterPage />} />
          <Route exact path='/dashboard' element={<Dashboard />} />
          <Route path='/' element={<Navigate replace to='/dashboard' />} />
        </Routes>
      </Router>
      <AlertNotification />
    </>

  );
}

export default App;
