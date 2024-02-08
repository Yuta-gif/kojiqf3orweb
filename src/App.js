import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import JobForm from './components/Jobrecruiting';
import Home from './components/Home';
import Offerings from './components/SidebarLinks/Offerings';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Jobrecruiting" element={<JobForm />} />
        <Route path='/offerings' element={<Offerings />} />
      </Routes>
    </Router>
  );
}

export default App;