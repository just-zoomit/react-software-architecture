import React from 'react';
import styled from 'styled-components';
import {  Route, Routes, Link } from 'react-router-dom';
import { About } from './pages/About';
import { Articles } from './pages/Articles';
import { Home } from './pages/Home';

const BigGreenHeading = styled.h1`
	color: green;
	font-size: 66px;
`;

function App() {
  return (
        <>
        <BigGreenHeading>Frontend: Server-Side Rendering Example</BigGreenHeading>
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

        </>
        

  );
}

export default App;
