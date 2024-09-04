import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Coin from './pages/Coin';
import Compare from './pages/Compare';
import WatchList from './pages/WatchList';
import React from 'react';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/coin/:id" element={<Coin />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/watchlist" element={<WatchList />} />
      </Routes>
    </div>
  );
}

export default App;
