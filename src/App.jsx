// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Img from './components/Img';
import Write from './components/Write';
import Draw from './components/Draw';
import './index.css';

const App = () => (
  <Router>
    <div className="app">
      <Navbar />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Img />} />
          <Route path="/write" element={<Write />} />
          <Route path="/draw" element={<Draw />} />
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;
