import React from 'react';
import { Route, Routes } from 'react-router-dom';


import './App.css';
import Hero from './Components/HERO/index';
import Header from "./Components/Header";
import Footer from './Components/Footer/index';
import AboutUs from './Components/About Us';
import ContactUS from './Components/Contact Us/Index';
import Features from './Components/Features/Index';
 

function App() {
  return (
    <>
      <Header />  
        <Routes>
          <Route path='/' element={ <Hero />}/>
          <Route path='Features' element={ <Features /> }/>
          <Route path='AboutUS' element={ <AboutUs/> }/>
          <Route path='ContactUS' element={<ContactUS />  }/>
        </Routes>
      <Footer/>
    </>
  )
}

export default App;
