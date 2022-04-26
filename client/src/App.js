import './App.css';
import React from "react"
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
// import { MainContext } from "./contextProvider";
import {BrowserRouter as Router, Routes,Route, NavLink} from "react-router-dom"


function App() {

  return (
    <Router>
      <header className='Header'>
        <nav className='NavBar'>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/services">Services</NavLink>
              <NavLink to="about">About</NavLink>
        </nav>
      </header>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/services" element={<Services />}></Route>
      <Route path="/about" element={<About />}></Route>
    </Routes>
      <footer>
        <p>This is the footer</p>
      </footer>
    </Router>
  );
}

export default App;
