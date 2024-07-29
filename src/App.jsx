import React from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';
import Error from './components/Error';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="*" element={<Error />} />
      </Routes>
  );
}

export default App;
