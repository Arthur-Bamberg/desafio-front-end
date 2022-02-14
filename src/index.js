import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Login from './components/Login';
import Home from './components/Home';

ReactDOM.render(
    <Router>
        <h1>Desafio Front end de Arthur Bamberg</h1>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
        </Routes>
    </Router>,
    document.getElementById('root')
    );