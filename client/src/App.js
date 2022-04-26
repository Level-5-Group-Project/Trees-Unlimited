import './App.css';
import React from "react"
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
// import { MainContext } from "./contextProvider";
import {BrowserRouter as Router, Routes,Route, NavLink} from "react-router-dom"
import Header from './components/Header';
import Footer from './components/Footer';


function App() {

  return (
    <Router>
      <Header />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/services" element={<Services />}></Route>
      <Route path="/about" element={<About />}></Route>
    </Routes>
      <Footer />
    </Router>
  );
}

export default App;
