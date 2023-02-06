import React from 'react';
import { Route, Routes } from 'react-router-dom';


import './App.css';
import Hero from './Components/HERO/index';
import Header from "./Components/Header";
import Onboarding from './Components/Onboarding/Index';
import Features from "./Components/Features/Index"
import Business from "./Components/Business/Index";
import Sero from './Components/Sero/index';
import Testimony from './Components/Testimony';
import Footer from './Components/Footer/index';
import AboutUs from './Components/About Us';
import ContactUS from './Components/Contact Us/Index';

 

function App() {
  return (
    <>
      <Header />  
        <Routes>
          <Route path='/' element={ <Hero />}/>
          <Route path='AboutUS' element={ <AboutUs/> }/>
          <Route path='ContactUS' element={<ContactUS />  }/>
        </Routes>
      <Footer/>
    </>
  )
}

export default App;
