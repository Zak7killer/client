
import * as React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <NavBar />
          <Link to="/about">button  </Link>
        </header>
        <div className='App-body'>

          <Routes>
            <Route path="/" element={<Homa />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}


function Homa(){
  return <div style={{ display: "flex",justifyContent:"center" }}>
    <Home />
  </div>
}

export default App;
