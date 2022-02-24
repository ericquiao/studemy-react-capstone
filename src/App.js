import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { ForCollection } from './components/ForCollection';
import { Collected } from './components/Collected';
import { Add } from './components/Add';
import './App.css';
import './lib/font-awesome/css/all.min.css';

function App() {
  return (
    <Router>
      <Header />

      <Routes>

       <Route exact path='/' element={<ForCollection/>}/>
       <Route path='/collected' element={<Collected/>}/> 
       <Route path='/add' element={<Add/>}/>
       

      </Routes>
    </Router>
  );
}

export default App;
