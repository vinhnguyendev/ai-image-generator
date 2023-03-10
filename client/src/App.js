import React, { useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import * as lay from './components'
import * as pages from './components'


function App() {
  const [logedIn, setLogedIn] = useState(false);

  return (
      <BrowserRouter>
    <div className="App container text-center min-vw-100 min-vh-100 d-flex flex-column position-relative ">
      <lay.NavigationBar logedIn={logedIn}/>
      <Routes>
      <Route path="/" element={<pages.Home/>}/>
      <Route path="/gallery" element={<pages.Gallery/>}/>
      <Route path="/about" element={<pages.About/>}/>
      <Route path="/login" element={<pages.Login setLogedIn={setLogedIn}/>}/>
      <Route path="/register" element={<pages.Register setLogedIn={setLogedIn}/>}/>
      </Routes>
    </div>
      <lay.Footer/>
      </BrowserRouter>
  );
}

export default App;
