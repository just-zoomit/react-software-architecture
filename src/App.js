import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { About } from './pages/About';
import { Articles } from './pages/Articles';
import { Home } from './pages/Home';


function App() {
  return (
        <BrowserRouter>
        <h1> Server-Side Renderign Example</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/articles">Articles</Link>
          </li>
        </ul>
      
        <Routes>
        <Route exact path="/" element={<Home/>}>
       
          </Route>
          <Route path="/about" element={<About/>}> 
          
          </Route>
          <Route path="/articles"  element={<Articles/>}>
          
          </Route>

        </Routes>

        </BrowserRouter>
        

  );
}

export default App;
